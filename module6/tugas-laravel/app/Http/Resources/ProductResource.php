<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "description" => $this->description,
            "manufacturer" => $this->manufacturer,
            "type" => $this->type,
            "base_price" => $this->base_price,
            "sell_price" => $this->sell_price,
            "stock" => $this->stock
        ];
    }
}
