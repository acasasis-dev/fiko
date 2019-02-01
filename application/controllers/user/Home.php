<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Home extends CI_Controller{
	public function __construct(){
		parent::__construct();
		session_start();
		// $this->load->model('admin/M_home');
		if( !$_SESSION[ "userdata" ] ){
			redirect('login');
		}
	}
	public function index(){
		$this->load->view('user/Home/V_home.php');
	}

	public function userprofile(){
		$this->load->view('user/Home/V_userprofile.php');
	}
}