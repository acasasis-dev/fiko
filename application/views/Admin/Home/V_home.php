<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1><i class="fa fa-home"></i>&nbspHome </h1>
    </section>
    <br>
    <!-- Main content -->
    <section class="content">
      <div class="col-lg-3 col-xs-6">
      <!-- small box -->
      <div class="small-box bg-orange">
        <div class="inner">
            <h3><?= $users[0]->count;?></h3>
          <p>List of Users</p>
        </div>
      <div class="icon">
        <i class="fa fa-user"></i>
      </div>
        <a href="<?= base_url()?>admin/users/" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
      </div>
    </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->