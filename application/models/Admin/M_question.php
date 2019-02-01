<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class M_question extends CI_MOdel{
	public function m_add_question($data){
		if($this->db->insert('question_tbl', $data)){
			return 1;
		}
		else{
			return 0;
		}
	}
	public function m_get_easy_question(){
		$query = $this->db->get('easy_question_tbl');
		return $query->result();
	}
}