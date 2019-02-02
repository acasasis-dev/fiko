<?php if(! defined('BASEPATH'))exit('No direct access allowed');

class Question extends CI_Controller{
	public function __construct(){
		parent::__construct();
		$this->load->model('admin/M_question');
		$this->sesscheck();
	}
	public function index(){
		$this->load->view('admin/question/extra/header_question.php');
		$this->load->view('admin/question/v_question.php');
		$this->load->view('admin/question/extra/footer_question.php');
	}
	public function list_of_easy_question(){
		$data['easy_question'] = $this->M_question->m_get_easy_question();
		$this->load->view('admin/question/extra/header_question.php');
		$this->load->view('admin/question/easy_question.php', $data);
		$this->load->view('admin/question/extra/footer_question.php');
	}
	public function add_easyq(){
		$this->form_validation->set_rules('question', 'Question', 'required');
		$this->form_validation->set_rules('wrong_answer_one', 'Choice 1', 'required');
		$this->form_validation->set_rules('wrong_answer_two', 'Choice 2', 'required');
		$this->form_validation->set_rules('wrong_answer_three', 'Choice 3', 'required');
		$this->form_validation->set_rules('correct_answer', 'Correct Answer', 'required');
		if($this->form_validation->run() == FALSE){
			$data['errors'] = $this->form_validation->error_array();
			$this->load->view('admin/question/extra/header_question.php');
			$this->load->view('admin/question/add_easy_question.php', $data);
			$this->load->view('admin/question/extra/footer_question.php');
		}
		else{
			if($_POST){
				if($this->M_question->m_add_question($_POST)){
					redirect('admin/question/index');
				}
			}
			else{
				$this->load->view('admin/question/extra/header_question.php');
				$this->load->view('admin/question/add_easy_question.php', $data);
				$this->load->view('admin/question/extra/footer_question.php');
			}
		}

	}
	public function add_easym(){

	}
	public function add_easyh(){

	}
}