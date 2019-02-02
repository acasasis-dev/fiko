<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Home extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('admin/M_home');
		$this->sesscheck();
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