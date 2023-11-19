<?php

namespace Models;

class Mod {
    public function deviceList() {
        $devices = [
            ["name" => "Centaurus M200", "price" => 570000],
            ["name" => "Hotcig R234", "price" => 520000],
            ["name" => "Vaporesso Gen 80", "price" => 367000],
            ["name" => "Hexohm V3 Anodized", "price" => 2900000],
            ["name" => "Thelema Quest Solo", "price" => 397000]
        ];

        return $devices;
    }
}