<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class M_users extends CI_MOdel{
	public function m_get_users(){
		$query = $this->db->get('user_tbl');
		return $query->result();
	}
	public function m_delete_user($id){
		$this->db->where('id', $id);
		return $this->db->delete('user_tbl');
	}
}