// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentGradeManagement {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Chi admin moi co quyen");
        _;
    }

    struct Student {
        string studentId;
        string name;
        string className;
        address wallet;
        uint score;
        bool hasScore;
        bool exists;
    }

    mapping(string => Student) private students;
    mapping(address => string) private walletToStudentId;

    event StudentAdded(string studentId, string name, address wallet);
    event ScoreUpdated(string studentId, uint score);

    function addStudent(
        string memory _studentId,
        string memory _name,
        string memory _className,
        address _wallet
    ) public onlyAdmin {
        require(!students[_studentId].exists, "Sinh vien da ton tai");

        students[_studentId] = Student(
            _studentId,
            _name,
            _className,
            _wallet,
            0,
            false,
            true
        );

        walletToStudentId[_wallet] = _studentId;

        emit StudentAdded(_studentId, _name, _wallet);
    }

    function inputScore(
        string memory _studentId,
        uint _score
    ) public onlyAdmin {
        require(students[_studentId].exists, "Sinh vien khong ton tai");
        require(_score <= 10, "Diem phai tu 0 den 10");

        students[_studentId].score = _score;
        students[_studentId].hasScore = true;

        emit ScoreUpdated(_studentId, _score);
    }

    function getStudentById(
        string memory _studentId
    ) public view returns (
        string memory,
        string memory,
        string memory,
        address,
        uint,
        bool
    ) {
        require(students[_studentId].exists, "Sinh vien khong ton tai");

        Student memory s = students[_studentId];

        return (
            s.studentId,
            s.name,
            s.className,
            s.wallet,
            s.score,
            s.hasScore
        );
    }

    function getMyGrade() public view returns (
        string memory,
        string memory,
        string memory,
        uint,
        bool
    ) {
        string memory studentId = walletToStudentId[msg.sender];
        require(students[studentId].exists, "Vi nay chua duoc gan sinh vien");

        Student memory s = students[studentId];

        return (
            s.studentId,
            s.name,
            s.className,
            s.score,
            s.hasScore
        );
    }
}