<?php
class userDAO {

    private $Db;

    function __construct($DB_CON)
    {
        $this->Db = $DB_CON;
    }

    public function addUser($user){
        try{
            $statement = $this->Db->prepare("INSERT INTO user(username,password,email) VALUES (:username,:password,:email)");
            $statement->bindparam(":username", $user->username);
            $statement->bindparam(":password", $user->password);
            $statement->bindparam(":email", $user->email);
            $statement->execute();   
            return true;
        } catch (PDOException $ex){
            echo $ex->getMessage();
            die($ex->getMessage()); 
        }
    }

    public function getUser($username, $password){
        try{
            $statement = $this->Db->prepare("SELECT * FROM user WHERE username=:username and password=:password");
            $statement->bindparam(":username", $username);
            $statement->bindparam(":password", $password);
            $statement->execute();
            $dataRows = $statement->fetch(PDO::FETCH_ASSOC);
            return $dataRows;

        } catch (PDOException $ex){
            echo $ex->getMessage();
            die($ex->getMessage()); 
        }
    }   
}
?>