<?php

class User {
      /* Member variables */
      var $username; 
      var $password; 
      var $email; 
      
      // Constructor is being implemented. 
    public function __construct($username, $password, $email) 
    { 
        $this->username = $username; 
        $this->password = $password; 
        $this->email = $email; 
    } 
        
      /* Member functions */
      function setUsername($username){ 
         $this->username = $username; 
      } 
        
      function getUsername(){ 
         return $this->username; 
      } 
        
      function setMail($email){ 
         $this->email = $email; 
      } 
        
      function getMail(){ 
         return $this->mail; 
      } 
      
      function setPassword($password){ 
         $this->password= $password; 
      } 
        
      function getPassword(){ 
         return $this->password; 
      } 
   } 
 
