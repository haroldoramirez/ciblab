angular.module('ciblab').controller('cadastro.controller', function ($scope, Formulario, toastr) {

        var diretorio = 'ciblab';
        var nomeArquivo = 'arquivo-teste.txt';
        var conteudo = '';

        // Allow for vendor prefixes. - SOLICITA A COTA
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

        // Check for the various File API support. - VERIFICA SE O NAVEGADOR E COMPATIVEL COM A API FILESYSTEM
        if (window.File && window.FileReader && window.FileList && window.Blob && window.requestFileSystem) {
            // Great success! All the File APIs are supported.
            console.log('The File APIs are fully supported in this browser.');
            console.log(navigator.userAgent);
        } else {
            // The File APIs NOT supported.
            alert('The File APIs are not fully supported in this browser.');
            console.log(navigator.userAgent);
        }

        /*INICIO CORE SYSTEM DE ARQUIVOS---------------------------------------------------------------------------------------------------------------------------------*/
        // A simple error handler - MANIPULADOR
        function manipuladorErros(error) {
          var message = '';

        /*           switch (error.code) {
              case FileError.SECURITY_ERR:
              message = 'Security Error';
              break;
              case FileError.NOT_FOUND_ERR:
              message = 'Not Found Error';
              break;
              case FileError.QUOTA_EXCEEDED_ERR:
              message = 'Quota Exceeded Error';
              break;
              case FileError.INVALID_MODIFICATION_ERR:
              message = 'Invalid Modification Error';
              break;
              case FileError.INVALID_STATE_ERR:
              message = 'Invalid State Error';
              break;
              default:
              message = 'Unknown Error';
              break;
          } */

          console.log(error.message);
        }

        /*Copiar arquivo para outro diretorio*/
        function copy(cwd, src, dest) {
          cwd.getFile(src, {}, function(fileEntry) {

            cwd.getDirectory(dest, {}, function(dirEntry) {
              fileEntry.copyTo(dirEntry);
            }, manipuladorErros);

          }, manipuladorErros);
        }

        /*Renomear arquivo*/
        function rename(cwd, src, newName) {
          cwd.getFile(src, {}, function(fileEntry) {
            fileEntry.moveTo(cwd, newName);
          }, manipuladorErros);
        }

        /*Inicio da Funcao Sistema de Arquivos*/
        function iniciaFS(fs) {

            /*Chamadas de funcao renomar e copiar*/
            //rename(fs.root, nomeArquivo, 'ciblab.txt');
            //copy(fs.root, '/folder1/me.png', 'folder2/mypics/');

            /* Cria Diretorio */
            fs.root.getDirectory('Documentoslab', {create:true}, function(directoryEntry) {
                directoryEntry.isFile = false;
                directoryEntry.isDirectory = true;
                directoryEntry.name = 'Documentoslab';
                directoryEntry.fullPath = '/Documentoslab';

            }, manipuladorErros);


            /* Cria Arquivo com texto */
            fs.root.getFile(nomeArquivo, {create: true}, function(fileEntry) {

              fileEntry.isFile = true;
              fileEntry.name = nomeArquivo;
              //fileEntry.fullPath = path.split('/');

                // Create a FileWriter object for our FileEntry (ciblab-arquivo.txt).
                fileEntry.createWriter(function(fileWriter) {

                  fileWriter.onwriteend = function(e) {
                    console.log('Write completed.', fileWriter);
                  };

                  fileWriter.onerror = function(e) {
                    console.log('Write failed: ' + e.toString());
                  };

                  // Create a new Blob and write it to file.txt.
                  var contentBlob = new Blob(['Data de incubação: ', conteudo], {type: 'text/plain'});
                  fileWriter.write(contentBlob);

                }, manipuladorErros);
            });

            console.log('FILESYSTEM: ', fs);

        }

        /*Fim da Funcao Inicia Sistema de Arquivos*/
        /*FIM CORE SISTEMA DE ARQUIVOS---------------------------------------------------------------------------------------------------------------------------------*/

        /*INICIO CAMPOS CADASTRO-----------------------------------------------------------------------------------------------------------------------------------------*/
        /*Cria Objeto formulario*/
        $scope.formulario = {};

        /*Dados do Select Mercado*/
        $scope.mercados = [
            { nome: 'Agroindústria'},
            { nome: 'Cultura energética'},
            { nome: 'Garantia de qualidade'},
            { nome: 'Indústria'},
            { nome: 'Resíduo urbano'},
        ];

        /*Dados do Select Materia*/
        $scope.materias = [
            { nome: 'Codigestão'},
            { nome: 'Cultivo energético'},
            { nome: 'Padrão'},
            { nome: 'Resíduo de tratamento de esgoto'},
            { nome: 'Resíduos alimentares'},
            { nome: 'Resíduo da indústria agropecuária'},
            { nome: 'Resíduo da industria de biocombustiveis'},
            { nome: 'Resíduos da produção de açúcar, amído e produtos secundários'},
            { nome: 'Resíduos da produção de óleo'},
            { nome: 'Resíduos de matadouro e restos de animais'},
            { nome: 'Resíduos de Pecuária'},
            { nome: 'Resíduos diversos da indústria de alimentos'},
            { nome: 'Resíduos industriais'},
        ];

        /*Dados do Select Setores*/
        $scope.setores = [
            { nome: 'Abatedouro de aves'},
            { nome: 'Alga'},
            { nome: 'Alho'},
            { nome: 'Amidonaria'},
            { nome: 'Avicultura'},
            { nome: 'Biomassa vegetal'},
            { nome: 'Bovinocultura'},
            { nome: 'Carne'},
            { nome: 'Cebola'},
            { nome: 'Codigestão'},
            { nome: 'Efluente industrial'},
            { nome: 'Esgoto doméstico'},
            { nome: 'Feijão'},
        ];

        /*Dados do Select Materia*/
        $scope.amostras = [
            { nome: 'Água residual'},
            { nome: 'Algas decantadas'},
            { nome: 'Algas floculadas'},
            { nome: 'Alho'},
            { nome: 'Amido de Mandioca'},
            { nome: 'Amostra sólida'},
            { nome: 'Amostra suco'},
            { nome: 'Armazenamento'},
            { nome: 'Aves poedeiras'},
            { nome: 'Bagaço de cana'},
            { nome: 'Bolacha + massa de recheio'},
            { nome: 'Bovino + aves poedeiras'},
            { nome: 'Bovino + suíno'},
            { nome: 'Café'},
            { nome: 'Cama de aves'},
            { nome: 'Cama de bovinos'},
            { nome: 'Cama de matrizeiro'},
            { nome: 'Capim elefante'},
        ];
        /*FIM CAMPOS CADASTRO-------------------------------------------------------------------------------------------------------------------------------------------*/

        /*Inicio - Submit do Form*/
        $scope.salvar = function() {

            // Get the form data.
            conteudo = $scope.formulario.data;
            console.log('1 - Data de incubação: ', conteudo);

            /* Requisição para o Sistema de Arquivos */
            window.requestFileSystem(window.PERSISTENT, 1024*1024*5, iniciaFS, manipuladorErros); // Arquivo persistente, tamanho do FS, Inicia o FS e Erros FS

      }
      /*Fim - Submit do Form*/

});
    