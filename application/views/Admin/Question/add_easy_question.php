<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <!-- <h1><i class="fa fa-plus"></i>&nbspAdd Easy Question</h1> -->
      <a href="<?= base_url()?>admin/question" class="btn bg-olive"><span class="fa fa-arrow-left"></span> Back</a>
    </section>
    <!-- Main content -->
    <section class="content">
      <!-- <?php echo validation_errors();?> -->

      <form method="POST" action="<?= base_url()?>admin/question/add_easyq">
        <!-- SELECT2 EXAMPLE -->
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="box-title"><span class="fa fa-plus"></span> Add Easy Question</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
          </div>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Question 1: </label>
                <?= form_error('question') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                <textarea name="question" <?= isset($errors['question'])? 'title="'.$errors['question'].'"': 'title=""';?> value="<?= set_value('question')?>" class="form-control" rows="3" placeholder="Type here...."></textarea>
                <?= form_error('question')?>
              </div>
              <!-- /.form-group -->
              <div class="form-group">
                <label>Correct Answer: </label> 
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-question"></i>
                  </div>
                  <?= form_error('correct_answer') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" <?= isset($errors['correct_answer'])? 'title="'.$errors['correct_answer'].'"': 'title=""';?> value="<?= set_value('correct_answer')?>" name="correct_answer" class="form-control" placeholder="Enter Choice 1">
                  </div>
                </div>
                <?= form_error('correct_answer')?>
              </div>
              <!-- /.form-group -->
              <div class="form-group">
                <label>Choice 1: </label> 
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-question"></i>
                  </div>
                  <?= form_error('wrong_answer_one') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" <?= isset($errors['wrong_answer_one'])? 'title="'.$errors['wrong_answer_one'].'"': 'title=""';?> value="<?= set_value('wrong_answer_one')?>" name="wrong_answer_one" class="form-control" placeholder="Enter Choice 2">
                  </div>
                </div>
                <?= form_error('wrong_answer_one')?>
              </div>
              <!-- /.form-group -->
              <div class="form-group">
                <label>Choice 2: </label> 
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-question"></i>
                  </div>
                  <?= form_error('wrong_answer_two') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" <?= isset($errors['wrong_answer_two'])? 'title="'.$errors['wrong_answer_two'].'"': 'title=""';?> value="<?= set_value('wrong_answer_two')?>" name="wrong_answer_two" class="form-control" placeholder="Enter Choice 3">
                  </div>
                </div>
                <?= form_error('wrong_answer_two')?>
              </div>
              <!-- /.form-group -->
              <div class="form-group">
                <label>Choice 3: </label> 
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-question"></i>
                  </div>
                  <?= form_error('wrong_answer_three') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" <?= isset($errors['wrong_answer_three'])? 'title="'.$errors['wrong_answer_three'].'"': 'title=""';?> value="<?= set_value('wrong_answer_three')?>" name="wrong_answer_three" class="form-control" placeholder="Enter Correct Answer">
                  </div>
                </div>
                <?= form_error('wrong_answer_three')?>
              </div>
              <!-- /.form-group -->
            </div>
            <!-- /.col -->
            <button type="submit" class="btn bg-olive"><span class="fa fa-plus"></span>Done</button>
            <a href="<?= base_url()?>admin/question/list_of_easy_question" class="pull-right btn btn-default"><span class="fa fa-list"></span>List of Question</a>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.box-body -->
      </div>
      </form>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->