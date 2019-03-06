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
		$this->load->view( "user/Easy/v_easy.php" );
	}

	public function med() {
		$this->load->view( "user/test2/v_test_2.php" );	
	}

	public function ha() {
		$this->load->view( "user/test/v_test_easy.php" );	
	}	
	public function haha() {
		$this->load->view( "user/test3/v_test_3.php" );	
	}		
	public function hahaha() {
		$this->load->view( "user/test4/v_test_4.php" );	
	}	
	public function medium() {
		$this->load->view( "user/Medium/v_medium.php" );	
	}	
	public function hard() {
		$this->load->view( "user/Hard/v_hard.php" );	
	}
		public function hamon() {
		$this->load->view( "user/test5/v_test_5.php" );	
	}	
		public function hamonado() {
		$this->load->view( "user/test6/v_test_6.php" );	
	}	
		public function hamburger() {
		$this->load->view( "user/test7/v_test_7.php" );	
	}	
		public function hamsilog() {
		$this->load->view( "user/test8/v_test_8.php" );	
	}	
		public function tapsilog() {
		$this->load->view( "user/test9/v_test_9.php" );	
	}	
		public function tocilog() {
		$this->load->view( "user/test10/v_test_10.php" );	
	}	
		public function footlongsilog() {
		$this->load->view( "user/test11/v_test_11.php" );	
	}

	public function getquestions() {
		$dif = $this->input->get( "dif" );
		$sk = $this->input->get( "sk" );

		$query = "
			select a.*, b.*
			from
				questions a join
				choices b
			on
				a.qid=b.qid and
				a.qdif=$dif and
				a.skid=$sk
		";

		$res = $this->db->query( $query )->result();
		$tmp_arr = [];
		foreach( $res as $x ) {
			array_push( $tmp_arr, $x );
		}

		$arr = [];
		$app = [];
		for( $x = 0; $x < count( $tmp_arr ); $x ++ ) {
			if( $tmp_arr[$x]->cid % 4 == 0 ) {
				array_push( $app, $tmp_arr[$x] );
				array_push( $arr, $app );
				$app = [];
			} else {
				array_push( $app, $tmp_arr[$x] );
			}
		}

		$final_arr = [];
		for( $x = 0; $x < 10; $x ++ ) {
			if( $arr[$x][0]->is_correct == 1 )
				$correct = "A";
			else if( $arr[$x][1]->is_correct == 1 )
				$correct = "B";
			else if( $arr[$x][2]->is_correct == 1 )
				$correct = "C";
			else
				$correct = "D";

			$tarr = [
				"question" => $arr[$x][0]->qdesc,
				"imgSrc" => "/images/". $arr[$x][0]->qpic,
				"choiceA" => $arr[$x][0]->cdesc,
				"choiceB" => $arr[$x][1]->cdesc,
				"choiceC" => $arr[$x][2]->cdesc,
				"choiceD" => $arr[$x][3]->cdesc,
				"correct" => $correct
			];

			array_push( $final_arr, $tarr );
		}
		
		echo json_encode( $final_arr );
	}
}