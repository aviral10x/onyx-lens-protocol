// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProjectVoting {
    struct Project {
        string githubLink;
        string loomVideoLink;
        string projectName;
        string imageURL;
        uint256 voteCount;
    }

    mapping(uint256 => Project) public projects;
    uint256 public projectCount;

    // Event emitted when a new project is added
    event ProjectAdded(uint256 projectId, string projectName);

    constructor() {
        projectCount = 0;
    }

    function addProject(
        string memory _githubLink,
        string memory _loomVideoLink,
        string memory _projectName,
        string memory _imageURL
    ) public {
        projectCount++;
        projects[projectCount] = Project({
            githubLink: _githubLink,
            loomVideoLink: _loomVideoLink,
            projectName: _projectName,
            imageURL: _imageURL,
            voteCount: 0
        });

        emit ProjectAdded(projectCount, _projectName);
    }

    function voteForProject(uint256 projectId) public {
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        projects[projectId].voteCount++;
    }

    function getProjectDetails(uint256 projectId)
        public
        view
        returns (
            string memory githubLink,
            string memory loomVideoLink,
            string memory projectName,
            string memory imageURL,
            uint256 voteCount
        )
    {
        require(projectId > 0 && projectId <= projectCount, "Invalid project ID");
        Project storage project = projects[projectId];
        return (
            project.githubLink,
            project.loomVideoLink,
            project.projectName,
            project.imageURL,
            project.voteCount
        );
    }
}
