! function(t) {
    t(function() {
            t(".walkthroughbtn").click(function() {
            t("body").pagewalkthrough({
                name: "obsimowalkthrough",
                steps: [{
                    wrapper: "",
                    margin: 0,
                    popup: {
                        content: "#walkthrough-1",
                        type: "modal",
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: "400"
                    }
                }, {
                    wrapper: ".obsimotable",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-2",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 0,
                        offsetVertical: 100,
                        width: '1000',
                    },
                    accessable: !0
                }, {
                    wrapper: "#hidebtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-3",
                        type: "tooltip",
                        position: "bottom",
                        offsetHorizontal: 0,
                        offsetVertical: 0
                    },
                    autoScroll: true,
                    onEnter: function() {
                        return t("#showbtn").hide(), t("#hidebtn").show(), t("#coursedescriptions").transition({
                            top: "5%"
                        }, 1e3), !0
                    }
                }, {
                    wrapper: "#thedescription",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-4",
                        type: "tooltip",
                        position: "bottom",
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        draggable: true
                    }
                    
                }, {
                    wrapper: "#tvtbtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-5",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 0,
                        offsetVertical: 0,
                        width: "400"
                    }
                }, {
                    wrapper: ".useradded",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-6",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: ".addcoursebtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-7",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: ".userstudypaths",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-8",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: ".basiccoursebtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-9",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    },
                    accessable: !0
                }, {
                    wrapper: ".feedbackbtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-10",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: ".savebtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-11",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: ".helpbtn",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-12",
                        type: "tooltip",
                        position: "top",
                        offsetHorizontal: 30,
                        offsetVertical: -30,
                        width: "400"
                    }
                }, {
                    wrapper: "",
                    margin: "0",
                    popup: {
                        content: "#walkthrough-13",
                        type: "modal",
                        position: "bottom",
                        offsetHorizontal: -30,
                        offsetVertical: 30
                    }
                }]
            }), t("body").pagewalkthrough("show")
        }), t(".prev-step").live("click", function(o) {
            t.pagewalkthrough("prev", o)
        }), t(".next-step").live("click", function(o) {
            t.pagewalkthrough("next", o)
        }), t(".restart-step").live("click", function(o) {
            t.pagewalkthrough("restart", o)
        }), t(".close-step").live("click", function(o) {
            t.pagewalkthrough("close", o)
        })
    })
}(jQuery);