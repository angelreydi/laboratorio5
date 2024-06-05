import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private productos0 = [
        {id:1,
        nombre:'Xiaomi 14 Ultra',
        categoria:'Telefonos'
        },
        { id:2,
        nombre:'Xiaomi 14',
        categoria:'Telefonos'
        },
        { id:3,
        nombre:'Xiaomi 13T',
        categoria:'Telefonos'
        },
        { id:4,
        nombre:'Xiaomi 12T pro',
        categoria:'Telefonos'
        },
        { id:5,
        nombre:'Xiaomi 12',
        categoria:'Telefonos'
        }
        ];
        findAll(){
        return this.productos0;
        }
        findById(id:Number){
            const prod = this.productos0.find( p => p.id === id );
            if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no encontrado`);
            return prod;
            }
        crearProducto(prod: any){
            prod.id = this.productos0[this.productos0.length-1].id+1;
            this.productos0.push(prod)
        }
        
        modificarProducto(id: Number,prod: any){
            let index = this.productos0.findIndex(item => item.id == id);
            if (index > -1) {
                this.productos0[index].categoria = prod.categoria
                this.productos0[index].nombre = prod.nombre
            }
        }

        eliminarProducto(id: Number){
            let index = this.productos0.findIndex(item => item.id == id);
            if (index > -1) {
                this.productos0.splice(index,1)
            }
        } 
}
