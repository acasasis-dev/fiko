<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1><i class="fa fa-list"></i>&nbspList of Easy Questions </h1>
    </section>
    <br>
    <!-- Main content -->
    <section class="content">
      <a href="<?= base_url()?>admin/question/add_easyq" class="btn bg-olive"><span class="fa fa-arrow-left"></span> Back</a>
      <br><br>
      <div class="box box-default">
        <div class="box-body">
          <div class="table-responsive">
            <table id="myTable" class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Question</th>
                  <th>Correct Answer</th>
                  <th>Choice 1</th>
                  <th>Choice 2</th>
                  <th>Choice 3</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  <?php 
                    if($this->uri->segment(5)){
                      $ctr=$this->uri->segment(5) + 1;
                    }
                    else{
                      $ctr=1; 
                    }
                  ?>
                  <?php 
                    foreach ($easy_question as $easy_questions): {
                    
                    }
                  ?>
                <tr>
                  <td><?= $ctr++?></td>
                  <td><?= $easy_questions->question?></td>
                  <td><?= $easy_questions->correct_answer?></td>
                  <td><?= $easy_questions->wrong_answer_one?></td>
                  <td><?= $easy_questions->wrong_answer_two?></td>
                  <td><?= $easy_questions->wrong_answer_three?></td>
                  <td>
                    <a href="#" tooltip="title" title="Delete" class="btn btn-danger"><span class="fa fa-trash"></span></a>
                  </td>
                </tr>
              <?php endforeach;?> 
             </tbody> 
            </table>
          </div>
        </div>
      </div>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->