<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class shopping extends CI_Controller{
	public function __construct(){
		parent::__construct();
		// $this->load->model('admin/M_home');
	}
	public function index(){
		$this->load->view('user/learn/v_shopping.php');
	}
}