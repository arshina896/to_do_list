$(document).ready(() => {
    $("#addbtn").on("click", function () {
        const title = $('#form-title').val().trim();
        const des = $('#description').val().trim();
        if (title !== "" && des !== "") {
            const taskItem = `
         <li class="border border-dark shadow d-flex justify-content-between flex-column p-3">
  <div class="d-flex justify-content-between w-100">
    <span>${title}</span>
    <div>
    <button class="btn btn-danger  delete-task">delete</button>
    </div>
  </div>
  <p>${des}</p>
</li>
 `;
            $(".do").append(taskItem);
            $("#form-title").val("");
            $("#description").val("");
        } else {
            alert("Please enter a task.");
        }
    });
    // delete
    $(".do").on("click", ".delete-task", function () {
        $(this).closest("li").remove();
      });

   

});
