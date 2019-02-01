<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>FIKO | Login</title>
  <link rel="stylesheet" type="text/css" href="<?= base_url()?>assets/css/stylesheet.css">
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?= base_url()?>assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?= base_url()?>assets/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?= base_url()?>assets/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?= base_url()?>assets/dist/css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="<?= base_url()?>assets/plugins/iCheck/square/blue.css">

</head>
<body class="hold-transition login-page" id="body " style="background-image: url('/images/loginbg.jpg')">
<div class="login-box" id="login-box">
  <div class="login-logo">
 
  </div>
  <!-- /.login-logo -->
  <br><br>
  <div class="login-box-body" id="login-box-body">
    <p></p>

    <?php echo form_open('login/login_user', '')?>
      <div class="form-group has-feedback">
        <?= form_error('username') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
          <input type="text" id="username" name="username" <?= isset($errors['username'])? 'title="'.$errors['username'].'"': 'title=""'?> value="<?= set_value('username')?>" class="form-control" placeholder="Enter Username">
          <?php echo form_error('username'); ?>
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <?= form_error('password') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
          <input type="password" id="password" class="form-control" <?= isset($errors['password'])? 'title="'.$errors['password'].'"': 'title=""'?> value="<?= set_value('password')?>" name="password" placeholder="Enter Password">
          <?php echo form_error('password'); ?>
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div><br><br>
      <div class="row">
        <div class="col-xs-12">
          <button type="submit" id="sign_in" class="btn btn-success btn-block btn-flat">Log In</button>
        </div>
        <!-- /.col -->
      </div>
    <?php echo form_close();?>

    <br>
    <center><a href="#" type="button" data-toggle="modal" data-target="#myModal" id="create_acc">Create Account</a><br></center>

    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <?php echo form_open('login/create_user', 'method="POST" ')?>
        <div class="modal-content">
            <div class="modal-header" id="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <center><h4 class="modal-title" id="modal-title">Create Account</h4></center>
            </div>
            <div class="modal-body" id="modal-body">
              <div class="form-group has-feedback">
                <?= form_error('firstname') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" id="firstname" name="firstname" <?= isset($errors['firstname'])? 'title="'.$errors['firstname'].'"': 'title=""'?> value="<?= set_value('firstname')?>" class="form-control" placeholder="Enter Firstname" required>
                  <?php echo form_error('firstname'); ?>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('middlename') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" id="middlename" name="middlename" <?= isset($errors['middlename'])? 'title="'.$errors['middlename'].'"': 'title=""'?> value="<?= set_value('middlename')?>" class="form-control" placeholder="Enter Middlename" required>
                  <?php echo form_error('middlename'); ?>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('lastname') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" id="lastname" name="lastname" <?= isset($errors['lastname'])? 'title="'.$errors['lastname'].'"': 'title=""'?> value="<?= set_value('lastname')?>" class="form-control" placeholder="Enter Lastname" required>
                  <?php echo form_error('lastname'); ?>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('birthdate') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="date" id="birthdate" name="birthdate" <?= isset($errors['birthdate'])? 'title="'.$errors['birthdate'].'"': 'title=""'?> value="<?= set_value('birthdate')?>" class="form-control" placeholder="Enter Birthdate" required>
                  <?php echo form_error('birthdate'); ?>
                  <span class="glyphicon glyphicon-calendar form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('gender') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" id="gender" name="gender" <?= isset($errors['gender'])? 'title="'.$errors['gender'].'"': 'title=""'?> value="<?= set_value('gender')?>" class="form-control" placeholder="Enter gender" required>
                  <?php echo form_error('gender'); ?>
                  <span class="glyphicon glyphicon-align-justify form-control-feedback"></span>
              </div><br><br>
              <div class="form-group has-feedback">
                <?= form_error('add_username') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="text" id="add_username" name="add_username" <?= isset($errors['add_username'])? 'title="'.$errors['add_username'].'"': 'title=""'?> value="<?= set_value('add_username')?>" class="form-control" placeholder="Enter Username" >
                  <?php echo form_error('add_username'); ?>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('add_password') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="password" id="add_password" name="add_password" <?= isset($errors['add_password'])? 'title="'.$errors['add_password'].'"': 'title=""'?> value="<?= set_value('add_password')?>" class="form-control" placeholder="Enter Password" required>
                  <?php echo form_error('add_password'); ?>
                  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <?= form_error('password_retype') != null ? '<div class="form-group has-error">' : '<div class="form-group has-feedback">'?>
                  <input type="password" id="password_retype" name="password_retype" <?= isset($errors['password_retype'])? 'title="'.$errors['password_retype'].'"': 'title=""'?> value="<?= set_value('password_retype')?>" class="form-control" placeholder="Retype Password" required>
                  <?php echo form_error('password_retype'); ?>
                  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                  <input type="hidden" id="role_id" name="role_id" <?= isset($errors['role_id'])? 'title="'.$errors['role_id'].'"': 'title=""'?> value="2" class="form-control" placeholder="Retype Password" required>
                  <?php echo form_error('role_id'); ?>
              </div>
            </div>
            <div class="modal-footer" id="modal-footer">  
              <button class="btn btn-success">Sign In</button>
            </div>
          <?= form_close();?>
        </div>
      </div>
    </div>

  </div>
 
</div>


<script src="<?= base_url()?>assets/bower_components/jquery/dist/jquery.min.js"></script>

<script src="<?= base_url()?>assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="<?= base_url()?>assets/plugins/iCheck/icheck.min.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' 
    });
  });
</script>
</body>
</html>
