<?php

namespace app\Models;

include "app/Config/DatabaseConfig.php";

use app\Config\DatabaseConfig;
use mysqli;

class Product extends DatabaseConfig {
    public $conn;

    public function __construct() {
        // Connect ke database mysql
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // Proses menampilkan semua data
    public function findAll() {
        $sql = "SELECT products.name, description, manufacturers.name AS manufacturer, types.name AS type, base_price, sell_price, stock FROM `products`
        JOIN manufacturers ON manufacturers.id = products.manufacturer_id
        JOIN types ON types.id = products.type_id";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    // Proses menampilkan data dengan id
    public function findById($id) {
        $sql = "SELECT products.name, description, manufacturers.name AS manufacturer, types.name AS type, base_price, sell_price, stock FROM `products`
        JOIN manufacturers ON manufacturers.id = products.manufacturer_id
        JOIN types ON types.id = products.type_id
        WHERE products.id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    // Proses insert data
    public function create($data) {
        $name = $data["name"];
        $description = $data["description"];
        $manufacturer = $data["manufacturer"];
        $type = $data["type"];
        $base_price = $data["base_price"];
        $sell_price = $data["sell_price"];
        $stock = $data["stock"];
        
        $query = "INSERT INTO `products` (`name`, `description`, `manufacturer_id`, `type_id`, `base_price`, `sell_price`, `stock`) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssiiiid", $name, $description, $manufacturer, $type, $base_price, $sell_price, $stock);
        $stmt->execute();
        $this->conn->close();
    }

    // Proses update data dengan id
    public function update($data, $id) {
        $name = $data["name"];
        $description = $data["description"];
        $manufacturer = $data["manufacturer"];
        $type = $data["type"];
        $base_price = $data["base_price"];
        $sell_price = $data["sell_price"];
        $stock = $data["stock"];

        $query = "UPDATE `products` SET `name` = ?, `description` = ?, `manufacturer_id` = ?, `type_id` = ?, `base_price` = ?, `sell_price` = ?, `stock` = ? WHERE `products`.`id` = ?";
        $stmt = $this->conn->prepare($query);
        // Huruf "s" berarti tipe parameter product_name adalah String dan huruf "i" berarti parameter id adalah integer
        $stmt->bind_param("ssiiiidi", $name, $description, $manufacturer, $type, $base_price, $sell_price, $stock, $id);
        $stmt->execute();
        $this->conn->close();
    }

    // Proses delete data dengan id
    public function destroy($id) {
        $query = "DELETE FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        // Huruf "i" berarti parameter pertama adalah integer
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}