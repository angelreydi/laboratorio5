import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('/productos')
export class ProductosController {

constructor(
    private readonly productosService: ProductosService
    ) {}
         @Get()
        getAllProductos(){
        // return this.productos;
        return this.productosService.findAll();
        }

        @Get("/:id")
        getProductosById(@Param("id") id:String){
        return this.productosService.findById(+id);
        }

        @Delete("/borrar/:id")
        borrarProducto(@Param("id") id:String){
                this.productosService.eliminarProducto(+id);
            } 

        @Post("/agregar")
        add(@Body() prod:any){
            this.productosService.crearProducto(prod)
        }
        @Put("/modificar/:id")
        modificar(@Param("id") id:Number,@Body() prod:any){
            this.productosService.modificarProducto(id,prod)
        }
}


