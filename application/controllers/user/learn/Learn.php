<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Learn extends CI_Controller{
	public function __construct(){
		parent::__construct();
		// $this->load->model('admin/M_home');		
	}
	public function index(){
		$this->load->view('user/learn/V_learn.php');
	}
}