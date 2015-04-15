<?php

class DB {

    protected static function ejecutaConsulta($sql) {
        $opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
//        $dsn = "mysql:host=localhost;dbname=dwes";
        $dsn = "mysql:host=localhost;dbname=marcadores";
        $usuario = 'dwes';
        $contrasena = 'abc123.';

        $dwes = new PDO($dsn, $usuario, $contrasena, $opc);
        $resultado = null;
        if (isset($dwes))
            $resultado = $dwes->query($sql);
        return $resultado;
    }

    public static function verificaCliente($nombre, $contrasena) {
        error_log("la contraseña ".md5($contrasena));
        $sql = "SELECT usuario FROM usuariosMarcadores ";
        $sql .= "WHERE usuario='$nombre' ";
        $sql .= "AND contrasena='" . md5($contrasena) . "';";
        $resultado = self::ejecutaConsulta($sql);
        $verificado = false;

        if (isset($resultado)) {
            $fila = $resultado->fetch();
            if ($fila !== false)
                $verificado = true;
        }
        return $verificado;
    }

}

?>
