<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>FiKo | Users</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- my css -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/css/stylesheet.css">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/dist/css/AdminLTE.min.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/dist/css/skins/_all-skins.min.css">
   <!-- DataTables -->
  <link rel="stylesheet" href="<?=base_url() ?>assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
 
<body class="hold-transition skin-green sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a href="#" id="mikeLogo" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini" ><b>Fi</b>Ko</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>F</b>ilipino <b>K</b>orean</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav  id="mikeNavbar" class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" id="try1" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span> 
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img src="<?= base_url()?>images/4.png" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs"><?php echo $_SESSION['userdata'][0]->firstname;?> <?php echo $_SESSION['userdata'][0]->lastname;?></span>
              </a>
              <ul class="dropdown-menu" role="menu" style="width: 10px;">
                <li><a href="<?= base_url()?>admin/home/accounts">Accounts</a></li>
                <li><a href="#">Record</a></li>
                <li><a href="#">Rankings</a></li>
                <li class="divider"></li>
                <li><a href="<?= base_url()?>login/signout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-custom-menu -->
    </nav>
  </header>

  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar" id="ms">
    <div class="user-panel">
      <div class="pull-left image">
        <img src="<?= base_url()?>images/4.png" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p><?php echo $_SESSION['userdata'][0]->firstname;?> <?php echo $_SESSION['userdata'][0]->lastname;?></p>
      </div>
    </div>
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">

        <li><a href="<?=base_url()?>admin/home"><i class="fa fa-home"></i> <span>Home</span></a></li> 

        <li class="active"><a href="<?= base_url()?>admin/users"><i class="fa fa-users"></i> <span>List of User</span></a></li> 

        <li><a href="<?= base_url()?>admin/question"><i class="fa fa-question"></i> <span>Question</span></a></li> 

        <!-- <li class="treeview">
          <a href="#">
            <i class="fa fa-users"></i> <span>User Management</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="<?= base_url()?>admin/list_of_user">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span>List of Users</span></a></li> 

          </ul>
        </li> -->

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>