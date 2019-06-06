$(document).ready(function () {
     var i = 1;
     $('#add').click(function () {
          i++;
          $('#dynamic_field').append(
               '<tr id="row' + i + '"><td id = "field'+i+'"><p><input  type="text" name="name[]" placeholder="Nhập tên thuộc tính..."class="form-control name_list" /></p><div id="rows"><div class="col-sm-4">  <p><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con..."class="form-control name_list" /></p></div><div class="col-sm-2"><p><button type="button" name="addttconlon" id = "#field'+i+'" class="btn btn-success addbtnlon">+</button></p></div><div id="rowssss'+i+'"><div class="col-sm-4"><p><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con của con..."class="form-control name_list" /></p></div><div class="col-sm-2"><p><button type="button" name="addttconnho" id="#rowssss'+i+'" class="btn btn-success addbtn">+</button></p></div></div></div></td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></td></tr>'
     );
     });
     $('#addttconlon').click(function () {
          i++;
          $('#rows').append(
               '<div id="row' + i + '"><td><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"></div><div id="rowsss'+i+'"><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con của con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"></div><button type="button" name="addttconnho" id="#rowsss'+i+'" class="btn btn-success addbtn">+</button><button style="margin-left: 10px" type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></div></td></div>'
          );
     });
     $('#addttconnho').click(function () {
          i++;
          $('#rowss').append(
               '<div id="row' + i + '"><td><div style="margin-top:20px" class="col-sm-4"></div><div style="margin-top:20px" class="col-sm-2"></div><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con của con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></div></td></div>'
          );
     });
     $(document).on('click', '.btn_remove', function () {
          var button_id = $(this).attr("id");
          $('#row' + button_id + '').remove();
     });
     $(document).on('click', '.addbtnlon', function () {
          i++;
          var bl_id = $(this).attr("id");
          $(bl_id).append(
               '<div id="row' + i + '"><td><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"></div><div id="rowsssss'+i+'"><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con của con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"><button type="button" name="addttconnho" id="#rowsssss'+i+'" class="btn btn-success addbtn">+</button><button style="margin-left: 10px" type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></div></td></div>'
          );
     });
     $(document).on('click', '.addbtn', function () {
          i++;
          var b_id = $(this).attr("id");
          $(b_id).append(
               '<div id="row' + i + '"><td><div style="margin-top:20px" class="col-sm-4"></div><div style="margin-top:20px" class="col-sm-2"></div><div style="margin-top:20px" class="col-sm-4"><input type="text" name="name[]"placeholder="Nhập tên thuộc tính con của con..."class="form-control name_list" /></div><div style="margin-top:20px" class="col-sm-2"><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></div></td></div>'
          );
     });
     $('#submit').click(function () {
          $.ajax({
               url: "name.php",
               method: "POST",
               data: $('#add_name').serialize(),
               success: function (data) {
                    alert(data);
                    $('#add_name')[0].reset();
               }
          });
     });
});