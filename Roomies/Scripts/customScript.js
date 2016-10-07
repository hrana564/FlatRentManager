var currentPage = 0;
var flatCurrentId = 1;
var flatList = [];
var memberList = [];
var me
var memberId = 1;
window.onload = function () {
    moveScreenToRight();
    flatList.push(new Flat("A18 - 201", "sunway"));
    flatList.push(new Flat("A19 - 201", "splendor"));
    flatList.push(new Flat("A20 - 201", "sparklet"));
    flatList.push(new Flat("A21 - 201", "sanghariya"));
}
function moveScreenToLeft() {
    if ($("#indexPage" + (currentPage - 1)).length) {
        currentPage--;
        $("#indexPageHeader").html($("#indexPage" + currentPage).html());
        initialSetupPage(currentPage);
        footerPagination();
    }
}
function moveScreenToRight() {
    if ($("#indexPage" + (currentPage + 1)).length) {
        currentPage++;
        $("#indexPageHeader").html($("#indexPage" + currentPage).html());
        initialSetupPage(currentPage);
        footerPagination();
    }
}
function initialSetupPage(pageId){
    if (pageId == 1) {

    }
    else if (pageId == 2) {
        AddMembersHeaderPagination();
    }
    else if (pageId == 3) {

    }
    else if (pageId == 4) {

    }
    else if (pageId == 5) {

    }
}
function footerPagination() {
    if ($("#indexPage" + (currentPage + 1)).length) {
        $("#imageRight").attr("src", "Images/footer/Right_On.png");
    } else {
        $("#imageRight").attr("src", "Images/footer/Right_Off.png");
    }

    if ($("#indexPage" + (currentPage - 1)).length) {
        $("#imageLeft").attr("src", "Images/footer/Left_On.png");
    } else {
        $("#imageLeft").attr("src", "Images/footer/Left_Off.png");
    }
}
function Flat(flatName,flatAddress) {
    this.id = flatCurrentId;
    flatCurrentId++;
    this.flatName = flatName;
    this.flatAddress = flatAddress;
}
function Members(flatId,memberName,memberAge,memberContact) {
    this.memberId = memberId;
    memberId++;
    this.flatId = flatId;
    this.memberName = memberName;
    this.memberAge = memberAge;
    this.memberContact = memberContact;
}
function AddMembersHeaderPagination() {
    var htmlBody='';
    flatList.forEach(function (flat, index) {
        htmlBody += '<button id="flatHeader' + flat.id + '" style="height:35px;margin:5px;" onclick="LoadAddMembersFooter(' + flat.id + ')">' + flat.flatName + '</button>';
    });
    console.log(htmlBody);
    $("#addMemberHeaderPagination").html(htmlBody);
}
function LoadAddMembersFooter(flatId) {
    $("#addMemberFormFlatId").val(flatId);
    $("#formAddMember")[0].reset();
    var htmlBody = '<table border="1" cellspacing="10" cellpadding="10" style="position:relative;left:20%;width:70%"><tr> <th>Name</th><th>Age</th><th>Contact</th> </tr>';
    memberList.forEach(function (member, index) {
        if (member.flatId = flatId) {
            htmlBody += '<tr> <td>' + member.memberName+'</td><td>' + member.memberAge +'</td><td>' + member.memberContact +'</td> </tr>'
        }
    });
    htmlBody += '</table>';
    $("#addMemberGrid").html(htmlBody);
}
function SaveNewMember() {
    memberList.push(new Members($("#addMemberFormFlatId").val(), $("#addMemberFormMemberName").val(), $("#addMemberFormMemberAge").val(), $("#addMemberFormMemberMobile").val()))
    LoadAddMembersFooter($("#addMemberFormFlatId").val());
    return false;
}