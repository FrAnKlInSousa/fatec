package fatec.ads.loja;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class ClienteRepo {

    private List<Cliente> clientes = new ArrayList<>();

    public void salvar(Cliente cliente){
        if (buscaEmail(cliente.getEmail()) == null){
            clientes.add(cliente);
        }
    }
    public void editar(Cliente cliente, String email){
        for(Cliente c: clientes){
            System.out.println(c.getEmail() + " >>> " + email);
            if (c.getEmail().equals(email)){
                c.setDocumento(cliente.getDocumento());
                c.setEmail(cliente.getEmail());
                c.setLogradouro(cliente.getLogradouro());
                c.setNome(cliente.getNome());
                c.setTelefone(cliente.getTelefone());
                break;
            }
        }

        
    }

    public Cliente buscaEmail(String email){
        for(Cliente c: clientes){
            if (c.getEmail().equals(email)){
                return c;
            }
        }
        return null;
    }

    public List<Cliente> listaClientes(){
        return clientes;
    }

    public String deletar(String email){
        Cliente cliente = this.buscaEmail(email);
        if (cliente != null){
            clientes.remove(cliente);
            return "Usuário deletado com sucesso.";
        }else{
            return "Usuário não encontrado.";
        }
    }

}
