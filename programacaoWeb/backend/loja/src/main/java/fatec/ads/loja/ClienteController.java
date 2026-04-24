package fatec.ads.loja;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin
public class ClienteController {

Cliente cliente;

@Autowired
Repo repo;

@PostMapping("/cliente")
public Cliente cria(@RequestBody Cliente cliente) {
    repo.salvar(cliente);
    return cliente;
}

@GetMapping("/clientes")
public List<Cliente> lista() {
    return repo.listaClientes();
}

@GetMapping("/cliente/{email}")
public Cliente listaTodos(@PathVariable String email) {
    return repo.buscaEmail(email);
}

@PutMapping("/cliente/{email}")
public Cliente edita(@PathVariable String email, @RequestBody Cliente cliente) {
    repo.editar(cliente, email);
    return cliente;
}


}
