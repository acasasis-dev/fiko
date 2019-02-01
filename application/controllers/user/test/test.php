<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class test extends CI_Controller{
	public function __construct(){
		parent::__construct();
		// $this->load->model('admin/M_home');
		if(empty($this->session->userdata('userdata'))){
			redirect('login');
		}
	}
	public function index(){
		$this->load->view('user/test/v_test.php');
	}
}