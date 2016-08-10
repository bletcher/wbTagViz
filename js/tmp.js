        var transDur = 400, desc, selectedStep;
        
        d3.selectAll(".step:not(#divider)").on("click", function() {
            desc = d3.select(".description");
            desc.transition().duration(transDur).style("opacity", 0).style("pointer-events", "none");
            
            d3.selectAll(".step").classed("selected", false); 
            d3.select(this).classed("selected", true);
            
            selectedStep = d3.select(this).attr("id");
            
            switch(selectedStep){
              case "step1":
                $("#all").click();
                state.counts.forEach(function(d){ d.color = "lightgrey" });
                break;
              case "step2":
                $("#colorSpecies").click();
                $("#species").click();
                break;  
             case "step3":
                $("#colorRiver").click();
                $("#river").click();
                break;
             case "step4":
                $("#colorYear").click();
                $("#year").click();
                break;
            }
            
            d3.select("#tmp").transition().text(selectedStep)
        });
          
        

          
          
          
            _ = !1, X = !1;
            var a = P;
            R && clearTimeout(I);

             
            d3.selectAll(".callout").transition().duration(P).style("opacity", 0), b.select(".num").html(""), 
            d3.select(".click-instruct").transition().duration(M).style("opacity", 0);
            , f = J[c].cause, g = J[c].outline;
            if ($ = +c.substr(4) + 1, q.sendEvent("advance:" + $), "step1" === c ? (d3.select(".intro").transition().duration(M).style("opacity", 1).style("pointer-events", "all"), 
            d3.selectAll(".description, .input-container").transition().duration(M).style("opacity", 0)) : d3.select(".intro").transition().duration(M).style("opacity", 0).style("pointer-events", "none"), 
            "step13" === c ? d3.select(".final").transition().duration(M).style("opacity", 1).style("pointer-events", "all") : d3.select(".final").transition().duration(M).style("opacity", 0).style("pointer-events", "none"), 
            c !== K ? (d3.select(".input-container").transition().duration(M).style("opacity", 0), 
            d3.selectAll("#chart, .top-container").style("cursor", "pointer")) : (d3.selectAll("#chart, .top-container").style("cursor", "auto"), 
            d3.select(".click-instruct").style("display", "none")), "step2" === c) a = P + 2.5 * M + P, 
            I = setTimeout(function() {
                e(c);
            }, R ? P : 0), d([ "choose" ], g, function() {
                I = setTimeout(function() {
                    d(f, g);
                    var a = E.callOut.startIdx;
                    d3.select(".callout-text").style("top", Math.floor(a % z) * r - 8 + "px").style("left", Math.floor(a % t / z) * r - 130 - 35 + "px"), 
                    d3.select(".callout-line").style("top", Math.floor(a % z) * r + x / 2 - 1 + "px").style("left", Math.floor(a % t / z) * r - 30 + "px"), 
                    d3.selectAll(".callout").transition().delay(M).duration(O).style("opacity", 1);
                }, 2.5 * M);
            }); else if ("step3" === c) {
                var h = 1800;
                a = 2 * h + O + N, d([], g), setTimeout(function() {
                    e(c);
                }, P), I = setTimeout(function() {
                    d(f.slice(0, 1), g), I = setTimeout(function() {
                        d(f.slice(0, 2), g), d3.select("#fade1").transition().duration(O).style("opacity", 1), 
                        I = setTimeout(function() {
                            d(f, g), d3.select("#fade2").transition().duration(O).style("opacity", 1);
                        }, .8 * h);
                    }, R ? h : h - (O + M));
                }, R ? 0 : O + M);
            } else if ("step11" === c) {
                var h = 1800;
                a = h + M + O + N, d3.select(".description").transition().duration(P).style("opacity", 0), 
                setTimeout(function() {
                    e(c);
                }, P), I = setTimeout(function() {
                    d(f.slice(0, 1), g), I = setTimeout(function() {
                        d(f, g), d3.select("#fade3").transition().duration(O).style("opacity", 1);
                    }, R ? h : h - (O + M));
                }, R ? 0 : O + M);
            } else d(f, g, function() {
                e(c);
            });
            d3.selectAll("select").each(function() {
                T = "AAAA", d3.select(this).property("value", "A");
            }), R = !0, setTimeout(function() {
                _ = !0, c !== K && d3.select(".click-instruct").transition().duration(M).style("opacity", 1);
            }, a);
        });