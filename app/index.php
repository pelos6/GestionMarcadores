<?php
// Recuperamos la información de la sesión
session_start();
// Y comprobamos que el usuario se haya autentificado
if (!isset($_SESSION['usuario']))
    die("Error - debe <a href='../login.php'>identificarse</a>.<br />");
?>
<!doctype html>
<html class="no-js">

    <head>
        <meta charset="utf-8">
        <title>Gestión de marcadores</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="shortcut icon" href="/favicon.ico">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <!-- build:css(.) styles/vendor.css -->
        <!-- bower:css -->
        <!--    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.css" />
            <link rel="stylesheet" href="../bower_components/datatables/media/css/jquery.dataTables.css" />
            <link rel="stylesheet" href="../bower_components/growl/stylesheets/jquery.growl.css" />-->
        <link rel=stylesheet href=styles/2bb516a0.vendor.css>
        <link rel="stylesheet" href="styles/dataTables.tableTools.css">
        <link rel=stylesheet href=styles/ad808671.main.css>
        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:css(.tmp) styles/main.css -->
        <!--<link rel="stylesheet" href="styles/main.css">-->
        <!-- endbuild -->
    </head>

    <body>
        <div class="container-fluid">
            <div class="page-header">
                <!-- data-target la relación con el div modal que abre o cierra  -->
                <!-- data-backdrop a static para que no se pueda hacer nada fuera de la pantalla que aparece... manias ...  -->
                <button id="boton-crear-marcador" data-target="#modal-crear" class="btn btn-success" data-toggle="modal" data-backdrop="static">Nuevo Marcador</button>
            </div>
            <div id="tabla" class="row">
                <div class="col-md-12">
                    <table id="miTabla"  class=" hover cell-border" cellspacing="0" width="100%">
                        <thead>
                        <th>
                            URL del Marcador
                        </th>
                        <th>
                            Concepto del Marcador
                        </th>
                        <th>HREF del Marcador</th>
                        <th>uso del Marcador</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                        </thead>
                        <tbody>
                        </tbody>
                        <tfoot>

                        <th><input type="text" placeholder="Buscar en URL del Marcador"></th>
                        <th><input type="text" placeholder="Buscar en Concepto del Marcador"></th>
                        <th>href del Marcador</th>
                        <th>uso del Marcador</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                        </tfoot>
                    </table>
                </div>
            </div>

            <body>
                <!-- http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-modals.php -->
                <!-- Modal CREAR HTML -->
                <div id="modal-crear" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form class="form-horizontal" novalidate id="crearMarcador">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Datos del Marcador</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="urlCrear" class="col-sm-4 control-label">URL:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" name="urlMarcadorCrear" id="urlMarcadorCrear" placeholder="URL del nuevo Marcador">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="conceptoCrear" class="col-sm-4 control-label">Concepto:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" name="conceptoMarcadorCrear" id="conceptoMarcadorCrear" placeholder="concepto del nuevo Marcador">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                    <!-- <button id="botonGuardarCrearMarcador" type="button" class="btn btn-primary" data-dismiss="modal">Guardar</button> -->
                                    <input type="submit" id="botonGuardarCrearMarcador" value="Guardar" data-toggle="modal" class="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Modal EDITAR HTML -->
                <div id="modal-editar" class="modal fade">
                    <div class="modal-dialog">
                        <form class="form-horizontal" novalidate id="editarMarcador">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title">Datos del Marcador</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="urlMarcadorEditar" class="col-sm-4 control-label">URL marcador:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" name="urlMarcadorEditar" id="urlMarcadorEditar">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="conceptoMarcadorEditar" class="col-sm-4 control-label">Concepto Marcador:</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" name="conceptoMarcadorEditar" id="conceptoMarcadorEditar">
                                        </div>
                                    </div>
                                    <input type="hidden" class="form-control" name="idMarcadorEditar" id="idMarcadorEditar">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" id="botonCancelarEditarMarcador" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                                    <!--   <button id="botonGuardarEditarMarcador" type="button" class="btn btn-primary" data-dismiss="modal">Guardar</button> -->
                                    <input type="submit" id="botonGuardarEditarMarcador" value="Guardar" data-toggle="modal" class="btn btn-primary" />
                                </div>
                        </form>
                    </div>
                </div>
        </div>
        <!-- Modal BORRAR HTML -->
        <div id="modal-borrar" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Borrar Marcador</h4>
                    </div>
                    <!-- <div class="form-group">
                        <label for="nombreBorrar" class="col-sm-4 control-label">Nombre:</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" readonly id="nombreBorrar">
                        </div>
                    </div>-->
                    <div class="modal-body">
                        <p>¿Seguro que quieres borrar el Marcador? </p>
                    </div>
                    <input type="hidden" class="form-control" name="idMarcadorBorrar" id="idMarcadorBorrar">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button id="botonBorrarBorrarMarcador" type="button" class="btn btn-primary" data-dismiss="modal">Borrar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <a href="https://github.com/pelos6/dataTablesMarcadores" class="boton color2">Ver en GitHub</a>
            <h1 id="circular">javier iranzo burriel</h1>
        </div>
        <!--     -->
        <!-- build:js(.) scripts/vendor.js -->
        <!-- bower:js -->
<!--            <script src="../bower_components/jquery/dist/jquery.js"></script>
        <script src="../bower_components/bootstrap/dist/js/bootstrap.js"></script>
        <script src="../bower_components/jquery-validate/dist/jquery.validate.js"></script>
        <script src="../bower_components/datatables/media/js/jquery.dataTables.js"></script>
        <script src="../bower_components/growl/javascripts/jquery.growl.js"></script>-->
        <script src=scripts/901e5043.vendor.js></script>
        <script src="scripts/dataTables.tableTools.js"></script>
        <!--<script src=scripts/e4791241.main.js></script>-->
        <script src=scripts/main.js></script>

        <!-- endbower -->
        <!-- endbuild -->
        <!-- build:js(.) scripts/plugins.js -->
        <!-- endbuild -->
        <!-- build:js({app,.tmp}) scripts/main.js -->
        <!--<script src="scripts/main.js"></script>-->
        <!-- endbuild -->
    </body>

</html>
