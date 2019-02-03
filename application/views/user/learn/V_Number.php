<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>FiKo | Home</title>
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
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?= base_url()?>assets/dist/css/skins/_all-skins.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<!-- ADD THE CLASS layout-top-nav TO REMOVE THE SIDEBAR. -->
<body class="hold-transition skin-blue layout-top-nav">
<div class="wrapper">

  <header class="main-header">
    <nav class="navbar navbar-static-top" id="navbar_header">
      <div class="container">
        <div class="navbar-header">
          <a href="<?= base_url()?>assets/index2.html" class="navbar-brand"><b>FiKo</b><i> Online Filipino Korean Tutorial</i></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="<?=base_url()?>user/home">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" id="navbar-search-input" placeholder="Search">
            </div>
          </form>
        </div>
        <!-- /.navbar-collapse -->
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            
            <!-- User Account Menu -->
            <li class="dropdown user user-menu">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <img src="<?= base_url()?>assets/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs"><?php echo $_SESSION['userdata'][0]->firstname;?> <?php echo $_SESSION['userdata'][0]->lastname;?></span>
              </a>
              <ul class="dropdown-menu" role="menu" style="width: 10px;">
                <li><a href="#">Acounts</a></li>
                <li><a href="#">Record</a></li>
                <li><a href="#">Rankings</a></li>
                <li class="divider"></li>
                <li><a href="<?= base_url()?>login/signout">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-custom-menu -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </header>
  <!-- Full Width Column -->
  <div class="content-wrapper">
    <div class="container">
      <!-- Content Header (Page header) -->
      <section class="content-header">

        <!-- for header -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;">
              Number: 1
              
              <!-- <audio controls style="width:100%;">
                 -->


                
              <!-- <audio id="myAudio">  
                <source src="<?= base_url()?>files/kakain.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio> -->

                <button onclick="playAudio( '0001-one.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;">
              Number: 2
            
              <button onclick="playAudio( '0002-two.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
          
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;">
               Number: 3
             <button onclick="playAudio( '0003-three.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;">
               Number: 4
              <button onclick="playAudio( '0004-four.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 5
              <button onclick="playAudio( '0005-five.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 6
              <button onclick="playAudio( '0006-six.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 7
              <button onclick="playAudio( '0007-seven.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 8
              <button onclick="playAudio( '0008-eight.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 9
              <button onclick="playAudio( '0009-nine.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 10
              <button onclick="playAudio( '0010-ten.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 11
              <button onclick="playAudio( '0011-eleven.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 12
              <button onclick="playAudio( '0012-twelve.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 13
              <button onclick="playAudio( '0013-thirteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 14
              <button onclick="playAudio( '0014-fourteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 15
              <button onclick="playAudio( '0015-fifteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 16
              <button onclick="playAudio( '0016-sixteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 17
              <button onclick="playAudio( '0017-seventeen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 18
              <button onclick="playAudio( '0018-eighteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 19
              <button onclick="playAudio( '0019-nineteen.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 20
              <button onclick="playAudio( '0020-twenty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 30
              <button onclick="playAudio( '0021-thirty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 40
              <button onclick="playAudio( '0022-fourty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 50
              <button onclick="playAudio( '0023-fifty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 60
              <button onclick="playAudio( '0024-sixty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 70
              <button onclick="playAudio( '0025-seventy.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 80
              <button onclick="playAudio( '0026-eighty.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="col-md-4">
          <div class="box box-default">
            <!-- /.box-header -->
            <div class="box-body">
              <img src="<?= base_url()?>images/logo.png" style="width:100px;height:100px;"> 
               Number: 90
              <button onclick="playAudio( '0027-ninety.mp3' )" value="sound" type="button" id="audio"><span class="glyphicon glyphicon-play"></span></button>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.content-wrapper -->
</div>
 
<script>
  function playAudio( x ) {
    y = new Audio( "<?= base_url() ?>files/numbers/" + x )
    y.play()
  }
</script>

<!-- jQuery 3 -->
<script src="<?= base_url()?>assets/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?= base_url()?>assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="<?= base_url()?>assets/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?= base_url()?>assets/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="<?= base_url()?>assets/dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?= base_url()?>assets/dist/js/demo.js"></script>
</body>
</html>
