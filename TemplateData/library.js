mergeInto(LibraryManager.library, {
    SetupAudio: function (meetingString) {
        let meetingData = JSON.parse(meetingString);
        JoinAudio(meetingData);
    }
});
