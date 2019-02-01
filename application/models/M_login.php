<?php if(!defined("BASEPATH"))exit("No direct access allowed");

class M_login extends CI_Model{
	public function m_user($data){
		$this->db->where('username', $data['username']);
		$qry = $this->db->get('user_tbl');
		return $qry->result();
		
		$arr_user = array();

		foreach ($users as $user) {
			if($this->user_password($data['password'], $user->salt == $user->password))
			{
				$arr_user = array('id' => $user['id'], 'uname' => $user['username']);
			}
			
		}
		return $arr_user;
	}
	
	private function user_password($password, $salt){
		return password_hash($salt.$password.$this->config->item('encryption_key'), PASSWORD_BCRYPT);
	}

	private function generate_salt(){
		return mt_rand(10000000, 99999999);
	}

	private function create_password($password){
		return password_hash($this->generate_salt().$password.$this->config->item('encryption_key'), PASSWORD_BCRYPT);
	}
	public function m_add_user($data){
		unset($data['password_retype']);
		$data['password'] = $this->create_password($data['password']);
		$data['salt'] = $this->generate_salt();
		return $this->db->insert('user_tbl', $data);
	}
}