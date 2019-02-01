<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1><i class="fa fa-users"></i>&nbspList of Users </h1>
    </section>
    <br>
    <!-- Main content -->
    <section class="content">

      <div class="box box-default">
        <div class="box-body">
          <div class="table-responsive">
            <table id="myTable" class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Gender</th>
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
                    foreach ($user as $users): {
                    
                    }
                  ?>
                <tr>
                  <td><?= $ctr++?></td>
                  <td><?= $users->lastname.' '.$users->firstname.' '.$users->middlename?></td>
                  <td><?= $users->birthdate?></td>
                  <td><?= $users->gender?></th>
                  <td>
                    <a href="<?= base_url()?>admin/users/delete_user/<?= $users->id;?>" tooltip="title" title="Delete" class="btn btn-danger"><span class="fa fa-trash"></span></a>
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