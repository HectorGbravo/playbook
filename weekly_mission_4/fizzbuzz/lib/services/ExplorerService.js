class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const AmountOfExplorersByMission = explorers.filter((explorer) => explorer.mission == "node")
        return AmountOfExplorersByMission.length
        
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == "node");
        return explorersUsernamesByMission.map((explorer) => explorer.githubUsername);
        
    }
}

module.exports = ExplorerService
