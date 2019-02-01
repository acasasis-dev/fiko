<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1><i class="fa fa-user"></i>&nbspUser Profile</h1>
    </section>
    <br>
    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">
                User Information
              </h3><hr>
              <div class="box-body">
                <div class="information">
                  <p>Name: <?php echo $_SESSION['userdata'][0]->firstname;?> <?php echo $_SESSION['userdata'][0]->middlename;?> <?php echo $_SESSION['userdata'][0]->lastname;?></p>
                  <p>Gender: <?php echo $_SESSION['userdata'][0]->birthdate;?></p>
                  <p>Gender: <?php echo $_SESSION['userdata'][0]->gender;?></p>
                  <!-- <audio controls>
                    <source src="save.mp3" type="audio/ogg">
                    <source src="<?= base_url()?>files/save.mp3" type="audio/mpeg">
                  Your browser does not support the audio element.
                  </audio> -->
                  <!-- <a href="#" class="btn bg-olive">Edit Account</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->