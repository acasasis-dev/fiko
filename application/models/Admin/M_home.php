<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class M_home extends CI_Model{
	public function get_user(){
		$query = $this->db->query('select count(*) as count from user_tbl');
		return $query->result();
	}
}