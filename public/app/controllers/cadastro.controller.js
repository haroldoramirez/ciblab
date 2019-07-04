angular.module('ciblab')
    .controller('cadastro.controller', function ($scope, Formulario, toastr) {

        // Handle vendor prefixes.
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

        // Handle errors
        function errorHandler(e) {
            var msg = '';
            switch (e.code) {
                case FileError.QUOTA_EXCEEDED_ERR:
                    msg = 'QUOTA_EXCEEDED_ERR';
                    break;
                case FileError.NOT_FOUND_ERR:
                    msg = 'NOT_FOUND_ERR';
                    break;
                case FileError.SECURITY_ERR:
                    msg = 'SECURITY_ERR';
                    break;
                case FileError.INVALID_MODIFICATION_ERR:
                    msg = 'INVALID_MODIFICATION_ERR';
                    break;
                case FileError.INVALID_STATE_ERR:
                    msg = 'INVALID_STATE_ERR';
                    break;
                default:
                    msg = 'Unknown Error';
                    break;
            };
            console.log('Error: ' + msg);
        }

        // Init and write some data to a file
        function onInitFs(fs) {
            fs.root.getFile('log-f-api.txt', {create: true}, function(fileEntry) {
                fileEntry.isFile === true;
                fileEntry.name == 'log-f-api.txt';
                fileEntry.fullPath == '/log-f-api.txt';
                // Create a FileWriter object for our FileEntry (log.txt).
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        console.log('Write completed.');
                    };
                    fileWriter.onerror = function(e) {
                        console.log('Write failed: ' + e);
                    };
                    // Create a new Blob and write it to log.txt.
                    if (!window.BlobBuilder && window.WebKitBlobBuilder)
                        window.BlobBuilder = window.WebKitBlobBuilder; // in Chrome 12.
                             var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder;
                    var bb = new BlobBuilder();
                    bb.append("some stuff");
                    console.log("bb size:"+bb.size);
                    bb.append('put some nice text in our file....');
                    var ourData = bb.getBlob('text/plain');
                    fileWriter.write(ourData);
                }, errorHandler);
            }, errorHandler);
        }

        // start the party
        $(function() {
            document.getElementById('inputData').innerHTML = 'start the tests';
            window.requestFileSystem(window.PERSISTENT, 5*1024*1024, onInitFs,errorHandler);
        });


        // Check for support.
        if (window.requestFileSystem) {
          // FileSystem Supported
          console.log('Supported')
        } else {
          // FileSystem Not Supported
           console.log('Not Supported')
        }

        let filePath = "/mnt/dados/ciblabdb.xlsx";

        let COMMA_DELIMITER = ",";
        let NEW_LINE_SEPARATOR = "\n";
        let FILE_HEADER = "Data_Incubacao,Protocolo";

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

        // Init and write some data to a file

        /*Submit do Form*/
        $scope.salvar = function(fs) {

            console.log($scope.formulario);

/*            let fileWriter = new FileWriter(filePath + "/readme.txt") ;
            fileWriter.open() ;
            fileWriter.writeLine("File written at : "+new Date()) ;
            fileWriter.writeLine("Another line") ;
            fileWriter.close() ;*/

/*            var filename = "readme.txt";
            var text = "Text of the file goes here.";
            var blob = new Blob([text], {type:'text/plain'});
            var link = document.createElement("a");
            link.download = filename;
            link.innerHTML = "Download File";
            link.href = window.URL.createObjectURL(blob);
            document.body.appendChild(link);*/

/*            var fileWriter = new Writer();
            	var text = "This is a test string";
            	var fileName = "Test.doc";
            	fileWriter.writeToFile("sfopera.com", text, fileName, function(err,url) {
            		if (err) {
            			resp.error("Write failed");
            		} else {
            			resp.success(url);
            		}
            	});*/

            fs.root.getFile('log-f-api.txt', {create: true}, function(fileEntry) {
                fileEntry.isFile === true;
                fileEntry.name == 'log-f-api.txt';
                fileEntry.fullPath == filePath;
                // Create a FileWriter object for our FileEntry (log.txt).
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        console.log('Write completed.');
                    };
                    fileWriter.onerror = function(e) {
                        console.log('Write failed: ' + e);
                    };
                    // Create a new Blob and write it to log.txt.
                    if (!window.BlobBuilder && window.WebKitBlobBuilder)
                        window.BlobBuilder = window.WebKitBlobBuilder; // in Chrome 12.
                    var bb = new BlobBuilder();
                    bb.append("some stuff");
                    console.log("bb size:"+bb.size);
                    bb.append('put some nice text in our file....');
                    var ourData = bb.getBlob('text/plain');
                    fileWriter.write(ourData);
                }, errorHandler);
            }, errorHandler);

        }

    });