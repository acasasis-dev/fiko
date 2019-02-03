<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class animals extends CI_Controller{
	public function __construct(){
		parent::__construct();
		// $this->load->model('admin/M_home');
		$this->sesscheck();
	}
	public function index(){
		$this->load->view('user/learn/v_animals.php');
	}
}