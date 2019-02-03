<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Home extends CI_Controller{
	public function __construct(){
		parent::__construct();
<<<<<<< HEAD
		// $this->load->model('admin/M_home');		
=======
		$this->load->model('admin/M_home');
		$this->sesscheck();
>>>>>>> 1450d0dfa69f956bac92036a5dace32543976c63
	}
	public function index(){
		$data['users'] = $this->display_user();
		$this->load->view('admin/home/extra/header_home.php');
		$this->load->view('admin/home/v_home.php', $data);
		$this->load->view('admin/home/extra/footer_home.php');
	}
	public function display_user(){
		$query = $this->M_home->get_user();
		return $query;
	}
	public function accounts(){
		$this->load->view('admin/home/extra/header_home.php');
		$this->load->view('admin/home/V_accounts.php');
		$this->load->view('admin/home/extra/footer_home.php');
	}
}