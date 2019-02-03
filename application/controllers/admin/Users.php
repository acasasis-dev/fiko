<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Users extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('admin/M_users');
		$this->sesscheck();
	}
	public function index(){
		$data['user'] = $this->M_users->m_get_users();
		$this->load->view('admin/users/extra/header_users.php');
		$this->load->view('admin/users/v_users.php', $data);
		$this->load->view('admin/users/extra/footer_users.php');
	}
	public function delete_user($id){
		if($this->M_users->m_delete_user($id)){
			redirect('admin/users/index');

		}
	}
}