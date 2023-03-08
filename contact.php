<?php
// Si le formulaire a été soumis
if(isset($_POST["message"])){
  $retour= mail("sarah.ittah@sfr.fr", $_POST["message"], "");
  if ($retour){
    echo "<p>L\'email a bien été envoyé<p>";
  }
}


?>