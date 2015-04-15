console.log("'Allo 'Allo! marcadores!!!"), $(document).ready(function() {
    jQuery.validator.addMethod("urlLocalhost", function(a, b) {
        return console.log("en el metodo " + a), -1 != a.indexOf("localhost") ? !0 : -1 != a.indexOf("file") ? !0 : this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
    }, "Debes introducir una url o al menos algo que lo parezca o localhost");
    var a = $("#crearMarcador").validate({
            rules: {
                conceptoMarcadorCrear: {
                    required: !0,
                    minlength: 2,
                    maxlength: 400
                },
                urlMarcadorCrear: {
                    required: !0,
                    minlength: 10,
                    maxlength: 400,
                    urlLocalhost: !0
                }
            },
            messages: {
                conceptoMarcadorCrear: {
                    required: "Para crear un marcador es necesario algo que explique su concepto",
                    minlength: "El concepto del marcador debe tener al menos {0} digitos",
                    maxlength: "El concepto del marcador debe tener como mucho {0} digitos"
                },
                urlMarcadorCrear: {
                    required: "Para crear un marcador es necesario una URL",
                    minlength: "La URL del marcador debe tener al menos {0} digitos",
                    maxlength: "La URL del marcador debe tener como mucho {0} digitos"
                }
            },
            submitHandler: function(a) {
                console.log("en el boton  submitHandler botonConfirmarCrearMarcador");
                var b = $("#urlMarcadorCrear").val(),
                    c = $("#conceptoMarcadorCrear").val();
                console.log("la url a insertar " + b), $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "php/mto_marcador.php",
                    async: !1,
                    data: {
                        accion: "crearMarcador",
                        urlMarcador: b,
                        conceptoMarcador: c
                    },
                    error: function(a, b, c) {
                        $.growl.error({
                            message: "Error al crear un marcador!" + c
                        })
                    },
                    success: function(a) {
                        var b = $("#miTabla").dataTable({
                            bRetrieve: !0
                        });
                        b.fnDraw(), $.growl({
                            title: "Exito!",
                            location: "tc",
                            size: "large",
                            style: "warning",
                            message: "El marcador ha sido creado con exito"
                        }), $("#modal-crear").modal("hide")
                    },
                    complete: {}
                })
            }
        }),
        b = $("#editarMarcador").validate({
            rules: {
                urlMarcadorEditar: {
                    required: !0,
                    minlength: 10,
                    maxlength: 400,
                    urlLocalhost: !0
                },
                conceptoMarcadorEditar: {
                    required: !0,
                    minlength: 2,
                    maxlength: 400
                }
            },
            messages: {
                conceptoMarcadorEditar: {
                    required: "Para editra un marcador es necesario algo que explique su concepto",
                    minlength: "El concepto del marcador debe tener al menos {0} digitos",
                    maxlength: "El concepto del marcador debe tener como mucho {0} digitos"
                },
                urlMarcadorEditar: {
                    required: "Para editar un marcador es necesario una URL",
                    minlength: "La URL del marcador debe tener al menos {0} digitos",
                    maxlength: "La URL del marcador debe tener como mucho {0} digitos"
                }
            },
            submitHandler: function(a) {
                console.log("en el boton  submitHandler botonConfirmarEditarmarcador");
                var b = $("#idMarcadorEditar").val(),
                    c = $("#urlMarcadorEditar").val(),
                    d = $("#conceptoMarcadorEditar").val();
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: "php/mto_marcador.php",
                    async: !1,
                    data: {
                        accion: "editarMarcador",
                        idMarcador: b,
                        urlMarcador: c,
                        conceptoMarcador: d
                    },
                    error: function(a, b, c) {
                        $.growl.error({
                            message: "Error al editar un marcador!" + c
                        })
                    },
                    success: function(a) {
                        var b = $("#miTabla").dataTable({
                            bRetrieve: !0
                        });
                        b.fnDraw(), $.growl({
                            title: "Exito!",
                            location: "tc",
                            size: "large",
                            style: "warning",
                            message: "El marcador ha sido editado con exito"
                        }), $("#modal-editar").modal("hide")
                    },
                    complete: {}
                })
            }
        });
    $("#modal-crear").on("hidden.bs.modal", function() {
        a.resetForm()
    }), $("#modal-editar").on("hidden.bs.modal", function() {
        b.resetForm()
    });
    var c = $("#miTabla").DataTable({
        processing: !0,
        serverSide: !0,
        ajax: {
            type: "POST",
            dataType: "json",
            url: "php/mto_marcador.php",
            async: !1,
            data: {
                accion: "cargarTabla"
            }
        },
        language: {
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
            sInfoPostFix: "",
            sSearch: "Buscar:",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords: "Cargando...",
            oPaginate: {
                sFirst: "Primero",
                sLast: "Último",
                sNext: "Siguiente",
                sPrevious: "Anterior"
            },
            oAria: {
                sSortAscending: ": Activar para ordenar la columna de manera ascendente",
                sSortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        },
        columns: [{
            data: "hrefMarcador"
        }, {
            data: "conceptoMarcador"
        }, {
            data: "urlMarcador"
        }, {
            data: "idMarcador",
            render: function(a) {
                return '<a href="#modal-editar" class="btn btn-primary editarbtn" data-toggle="modal"  data-backdrop="static" >Editar</a>'
            }
        }, {
            data: "idMarcador",
            render: function(a) {
                return '<a href="#modal-borrar" class="btn btn-warning borrarbtn" data-toggle="modal"  data-backdrop="static" >Borrar</a>'
            }
        }],
        columnDefs: [{
            targets: [2],
            visible: !1,
            searchable: !1
        }]
    });
    c.columns().every(function() {
        var a = this;
        $("input", this.footer()).on("keyup change", function() {
            a.search(this.value).draw()
        })
    }), $("#boton-crear-marcador").click(function(a) {
        console.log("en el boton-crear-marcador"), $("#urlMarcadorCrear").val("")
    }), $("#botonGuardarCrearMarcador").click(function(a) {
        console.log("en el botonGuardarCrearMarcador")
    }), $("#tabla").on("click", ".editarbtn", function() {
        var a = $(this).parents("tr")[0],
            b = c.row(a).data();
        $("#idMarcadorEditar").val(b.idMarcador), $("#urlMarcadorEditar").val(b.urlMarcador), $("#conceptoMarcadorEditar").val(b.conceptoMarcador), console.log("en el boton-editar-marcador " + b.idMarcador + " " + b.hrefMarcador)
    }), $("#botonGuardarEditarMarcador").click(function(b) {
        console.log("en el boton botonGuardarEditarMarcador " + a)
    }), $("#tabla").on("click", ".borrarbtn", function() {
        var a = $(this).parents("tr")[0],
            b = c.row(a).data();
        $("#idMarcadorBorrar").val(b.idMarcador), $("#hrefMarcadorBorrar").val(b.hrefMarcador), $("#modal-borrar p").html("¿Seguro que quiere borrar el marcador " + b.hrefMarcador + "?"), console.log("en el boton-borrar-marcador " + b.idMarcador + " " + b.hrefMarcador)
    }), $("#botonBorrarBorrarMarcador").click(function(a) {
        console.log("en el boton botonBorrarBorrarmarcador");
        var b = $("#idMarcadorBorrar").val();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "php/mto_marcador.php",
            async: !1,
            data: {
                accion: "borrarMarcador",
                idMarcador: b
            },
            error: function(a, b, c) {
                $.growl.error({
                    location: "tc",
                    message: "Error al borrar un marcador!" + c
                })
            },
            success: function(a) {
                if (console.log(a[0].estado + " " + a[0].mensaje), 0 == a[0].estado) {
                    var b = $("#miTabla").dataTable({
                        bRetrieve: !0
                    });
                    b.fnDraw(), $.growl({
                        title: "Exito!",
                        location: "tc",
                        size: "large",
                        style: "warning",
                        message: "El marcador ha sido borrado con exito"
                    })
                } else $.growl.error({
                    location: "tc",
                    message: "Error al borrar un marcador!" + a[0].mensaje
                })
            },
            complete: function(a) {}
        })
    })
});
var circ = document.getElementById("circular"),
    textarr = circ.textContent.split("");
circ.textContent = "";
for (var i = 0; i < textarr.length; i++) circ.innerHTML += '<span style="-webkit-transform: rotate(' + (16 * (i + 1) - 16) + "deg);transform: rotate(" + (16 * (i + 1) - 16) + 'deg);">' + textarr[i] + "</span>";
