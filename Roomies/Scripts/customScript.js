var currentPage = 0;
var flatCurrentId = 1;
var flatList = [];
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
        footerPagination();
    }
}
function moveScreenToRight() {
    if ($("#indexPage" + (currentPage + 1)).length) {
        currentPage++;
        $("#indexPageHeader").html($("#indexPage" + currentPage).html());
        footerPagination();
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

}