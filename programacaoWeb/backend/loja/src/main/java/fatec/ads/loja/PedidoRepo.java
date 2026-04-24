package fatec.ads.loja;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;


@Component
public class PedidoRepo {

    List<Pedido> pedidos = new ArrayList<>();

    public void criar(Pedido pedido){
        if(buscar(pedido.getProduto().getCodigo()) == null){
            pedidos.add(pedido);
        }

    }

    public Pedido buscar(int produtoCodigo){
        for (Pedido p : pedidos){
            if(p.getProduto().getCodigo() == produtoCodigo){
                return p;
            }
        }
        return null;
    }

    public List<Pedido> listar(){
        return pedidos;
    }

    public String editar(int produtoCodigo, Pedido pedido){
        Pedido p = buscar(produtoCodigo);
        if (p == null){
            return "Pedido não encontrado.";
        }
        p.setProduto(pedido.getProduto());
        p.setQuantidade(pedido.getQuantidade());
        p.setValor(pedido.getValor());
        return "Pedido atualizado com sucesso.";
    }

    public String deletar(int codigoProduto){
        Pedido pedido = buscar(codigoProduto);
        if (pedido == null){
            return "Pedido não existe.";
        }
        pedidos.remove(pedido);
        return "Pedido removido com sucesso.";
    }
}
