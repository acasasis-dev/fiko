<?php if(!defined("BASEPATH"))exit("No direct access allowed");

class Login extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('M_login');		
	}

	public function example() {
		echo "Hello there";
	}
	public function signout(){
		session_destroy();
		redirect('login');
	}
	public function index(){
		$this->load->view('V_login');
	}
	public function login_user(){
		$this->form_validation->set_rules('username', 'Username', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		
		if($this->form_validation->run() == FALSE){
			$data['errors'] = $this->form_validation->error_array();
			$this->load->view('V_login.php', $data);
		}
		else{
			if( $_POST ) {
				$u = $this->M_login->m_user($_POST);
				if( $u ) {
					$_SESSION[ "userdata" ] = $u;
					if( $u[0]->role_id == 1){
						redirect('admin/home');	
					} else if( $u[0]->role_id == 2){
						redirect('user/home');
					}
				} else {
					redirect('login/index');
				}
			}			
		}
	}
	public function create_user(){
		$insert_user = array(
			'firstname' => $this->input->post('firstname'),
			'middlename' => $this->input->post('middlename'),
			'lastname' => $this->input->post('lastname'),
			'birthdate' => $this->input->post('birthdate'),
			'gender' => $this->input->post('gender'),
			'username' => $this->input->post('add_username'),
			'password' => $this->input->post('add_password'),
			'role_id' => $this->input->post('role_id'),
		);
		$qry = $this->M_login->m_add_user($insert_user);
		redirect('login/index');
		
	}
}
