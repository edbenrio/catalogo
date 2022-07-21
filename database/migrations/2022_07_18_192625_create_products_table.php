<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->string('nombre');
            $table->string('codigo')->nullable();
            $table->string('descripcion');
            $table->boolean('venta')->nullable();
            $table->boolean('alquiler')->nullable();

            //fk Brand
            //$table->unsignedBigInteger('brand_id');
            $table->foreignId('brand_id')->nullable()->references('id')->on('brands');

            //fk Category
            //$table->unsignedBigInteger('category_id');
            //$table->foreignId('category_id')->nullable()->references('id')->on('categories');

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
