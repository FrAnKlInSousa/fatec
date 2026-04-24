package fatec.ads.loja;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@CrossOrigin
public class PedidoController {

    Pedido pedido;

    @Autowired
    PedidoRepo repo;

    @PostMapping("/pedido")
    public void cria(@RequestBody Pedido entity) {
        repo.criar(entity);        
        
    }

    @GetMapping("/pedidos")
    public List<Pedido> listaTodos() {
        return repo.listar();
    }
    
    @PutMapping("pedido/{codigo}")
    public String edita(@PathVariable int codigoProduto, @RequestBody Pedido entity) {
        return repo.editar(codigoProduto, entity);
    }
    
    @DeleteMapping("pedido/{codigoProduto}")
    public String deleta(@PathVariable int codigoProduto){
        return repo.deletar(codigoProduto);
    }
}
