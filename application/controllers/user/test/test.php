<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Test extends CI_Controller{
	public function __construct(){
		parent::__construct();
		// $this->load->model('admin/M_home');
		$this->sesscheck();
	}
	
	public function index(){
		$this->load->view('user/test/v_test.php');
	}

	public function easy() {
		$this->load->view( "user/test/v_test_easy.php" );
	}
}