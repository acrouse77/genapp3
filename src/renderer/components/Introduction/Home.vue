<style scoped>
.padd-5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}
hr.style18break {
  margin-top: 2rem;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 1px 0 0 0;
}
hr.style18top {
  height: 30px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
hr.style18 {
  height: 30px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
hr.style18:before {
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}
hr.style18bottom:before {
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: #8c8b8b;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}
.lead {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 200;
    line-height: 1.4
}

.header {
    margin-top: 30px
}

h1,
.h1 {
    font-size: 36px
}

h2,
.h2 {
    font-size: 30px
}

h3,
.h3 {
    font-size: 24px;
    font-weight: bold
}

h4,
.h4 {
    font-size: 18px
}

h5,
.h5 {
    font-size: 14px
}

h6,
.h6 {
    font-size: 12px
}

h2,
h3 {
    orphans: 3;
    widows: 3
}

h2,
h3 {
    page-break-after: avoid
}
</style>
<template>
<div class="row">
    <!--<div class="jumbotron jumbotron-fluid text-white jumbotron_intro">
        <div class="container">
            <div class="row text-right">
            </div>
        </div>
    </div>-->
    <div style="margin:0 auto;">
      <hr class="style18top">
        <div class="padd-5 section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <img src="static/img/introduction.png" class="img-fluid img-thumbnail">
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-primary">INTRODUCTION</h1>
                        <h3>Welcome to Your Genome</h3>
                        <p class="lead">The guide provides details about <b>your genetic information</b> as identified through whole genome sequencing. This section provides an overview of the study and an explanation of how to read the guide.&nbsp;</p>
                        <p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#INTRODUCTION" aria-expanded="false" aria-controls="collapseExample">
                          Read more
                        </button>
                      </p>
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="INTRODUCTION">
              <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                    <h1 class="text-primary">INTRODUCTION</h1>
                    <h3><strong>Welcome to Your Genome</strong></h3>
                      <p>The information in this Insight Genome Research Guide (Guide) is based upon current scientific knowledge and technology as of the date of this Guide and is subject to change. This Guide and its contents are provided as part of a research study and,
                          as a research product, is not intended to offer medical advice or diagnosis. The content of this Guide is for educational and informational purposes only and does not replace the advice and recommendations provided by your physician. You must
                          consult your physician or other qualified health care provider before taking any drug, supplement, changing your diet, making lifestyle changes, or commencing or discontinuing any course of treatment. </p>

                      <p>The following pages provide details about your genetic information as identified through whole genome sequencing. You are receiving this Guide as a participant in the IRB-approved study entitled, Impact of Genomic Sequencing, (IRB Protocol #________).The
                          physician who ordered your whole genome sequencing test received a clinical report from the testing laboratory. The clinical report differs from this Guide in that it only includes genetic variants which are known as of the date of the test to
                          be highly impactful on disease risk, influence your clinical care, or offer suggestions pertaining to which medications you should or should not take. This Guide, provided under the auspices of research, relates your genetic information to a broader
                          academic and biomedical research initiative. If you have not already, we encourage you to talk with your physician about the clinical report and any next steps indicated by your clinical results. </p>

                      <p>The Insight Genome Research Guide provides an in-depth examination of genetic variants associated, as of the date of this Guide, with human traits and disease risk, but do not currently meet criteria for clinical reporting. The Guide also includes
                          an explanation of how the genome sequencing test is performed, how genetic data are analyzed, and some important caveats to keep in mind when making sense of your genomic information.</p>

                      <p>Note that the clinical report and Insight Genome Research Guide examine your genome in different ways. The clinical report describes DNA changes (many of which are very rare) that are known to significantly impact disease risk. In contrast, the research
                          Guide examines commonly occurring DNA changes which have generally smaller impacts on risk. Accordingly, the two reports may appear to provide contradictory risk information. The results in the research Guide should always be explored in the context
                          of the clinical report, personal medical history, and family health history.</p>
                </div>
                
              </div>
            </div> <!--  end row -->
            </div> <!--  end container -->
        </div>
        <hr class="style18">
        <div class="padd-5 section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-primary">YOUR GENOME</h1>
                        <h3>Exploring your sequence</h3>
                        <p class="lead">A <b>genome</b> is the complete set of instructions that allows an organism to grow and develop. &nbsp;It is composed of a series of chemical building blocks written in shorthand as a sequence of four letters: <b>A, T, C, and G</b>.
                            The human genome contains 6 billion of these building blocks. Certain segments of the DNA sequence are known as <b>genes</b>. <b>Whole genome sequencing</b> allows us to read your entire genetic makeup to compare it to sequences
                            that scientists have determined impacts our health, physical traits or biochemical processes.</p>
                            <p>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#YOURGENOME" aria-expanded="false" aria-controls="collapseExample">
                              Read more
                            </button>
                          </p>
                    </div>

                    <div class="col-md-6">
                        <img src="static/img/dna_fingerprint.png" class="img-fluid img-thumbnail">
                    </div>
                  </div>
              </div>
                <div class="container">
                  <div class="row ">
                  <div class="collapse" id="YOURGENOME">
                    <hr class="style18break">
                    <div class="card card-block" style="border-color: #fff;">
                      <h1 class="text-primary">YOUR GENOME</h1>
                      <a name="GANDD"></a>
                        <h3><strong>Exploring your sequence</strong></h3>
                        <p><b><i>Whole Genome Sequencing</i></b></p>
                          <p>Whole genome sequencing is a type of genetic test that explores a person's entire genetic code, also known as their genome. A <b>genome</b> is the complete set of genetic material for a particular organism. This genetic material (DNA) is responsible
                            for providing instructions for that organism to grow and develop, and is composed of a series of chemical building blocks written in shorthand as a sequence of four letters: A, T, C, and G. The human genome sequence contains 6 billion of these
                            building blocks. Certain segments of the DNA sequence are known as genes. Each <b>gene</b> provides a specific instruction in the bodyÑsimilar to a single recipe in a cookbook providing instructions for a single dish.</p>

                          <p>Traditionally, whole genome sequencing, along with many other types of clinical genetic testing, has almost exclusively been used to diagnose an ongoing medical problem that was not able to be diagnosed based on symptoms alone. However, because whole
                            genome sequencing looks at all of an individual's DNA at once, the amount of information that can result from this testing is of general interest to those who aren't seeking a diagnosis for a specific medical question or condition. Increasingly,
                            whole genome sequencing is being used to provide information about genetic predisposition to these individuals. This information is sometimes associated with increased susceptibility to particular diseases or conditions, although such susceptibility
                            does not mean that the individual will develop the disease or condition in question. Genomic information is one component of disease risk. It may Guide what to be mindful of but typically does not provide a diagnosis in the absence of other factors.</p>

                          <p>Although some may refer to individuals seeking this type of genome analysis as healthy or well (as opposed to those with a specific health problem seeking a diagnosis through whole genome sequencing), those terms can be misleading. Most adults
                            have at least one health condition (such as diabetes, high blood pressure, or cardiovascular disease), many of which have genetic risk factors that can be identified through genome sequencing. Genome analysis may also yield important clues for
                            health conditions not usually considered genetic including genetic variants that impact how a person responds to medication. </p>

                          <p>No two human beings, with the exception of identical twins, have the same exact genome sequence. In fact, two unrelated individuals have millions of differences in their DNA sequence. Large-scale genetic testing, such as genome sequencing, identifies
                            and analyzes these genetic differences or <b>variants</b> - most of which are benign with minimal or no impact on health and disease. To our current knowledge, only a small fraction of genetic variation causes significant disease risk and medical
                            problems. Identifying these meaningful variations is quite literally like finding a needle in a haystack. </p>

                          <p>To maximize the benefit of whole genome sequencing, the laboratory obtains both patient DNA and information about personal and family history. A team of specially trained scientists and physicians reviews the DNA variants and the medical information
                            simultaneously, searching for DNA changes that may correlate with the patient's background or symptoms. This is a difficult process, requiring sophisticated computer programs and highly trained specialists to filter through millions of benign
                            (non-disease causing) variations in search of the handful that may be, to our current knowledge, of medical importance. When the laboratory concludes that a particular DNA change is associated with disease risk, it is classified as a <b>pathogenic variant</b>.
                            All the disease associated variants included in the clinical report are confirmed with an additional, genetic test. Confirmed variants are compiled into a report that is sent to the healthcare provider who ordered the test.</p>

                          <p>The information contained in this research Guide is not included in your clinical report because this information is either not considered pathogenic (e.g. earwax type) or the impact of the DNA change on the associated disease is limited according
                            to our current knowledge. Additionally, unlike the actionable clinical results, these research findings are not confirmed with a second test. What this Guide does provide is information concerning how some of the variants found in your genomic
                            sequence are associated with increased or decreased susceptibility to particular diseases or conditions. Additionally, the Guide includes variants believed to contribute to specific human traits and characteristics.</p>

                          </div>
                        </div>
                      </div> <!--  end row -->
                    </div> <!--  end collapse container -->
                  </div> <!--  end section -->
            <hr class="style18">
        <div class="padd-5  section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="static/img/disease.png" class="img-fluid img-thumbnail">
                    </div>
                    <div class="col-md-6">
                      <h1 class="text-primary">GENOMICS AND DISEASE</h1>
                        <h3 contenteditable="true">Changes in DNA can impact the development of disease</h3>
                        <p class="lead">Some individuals have sequences in their genome that are known to impact their health. &nbsp;These can be protective or increase risk of disease. &nbsp;Sequences with strong evidence for direct impact on health are more likely
                            to be provided by clinical report. &nbsp;Some diseases are more complex and thought to be impacted by multiple locations in the genome. &nbsp;The ability to predict increases in risk for complex disorders is still under research.
                            &nbsp;Preliminary results are growing and a comparison of your genome to these discoveries is provided in the research section and the chapters. &nbsp;&nbsp;</p>
                            <p>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#GENANDDIS" aria-expanded="false" aria-controls="collapseExample">
                              Read more
                            </button>
                          </p>
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="GENANDDIS">
                <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                  <h1 class="text-primary">GENOMICS AND DISEASE</h1>
                  <h3><strong>Changes in DNA impact the development of symptoms and disease</strong></h3>
                  <br />
                    <p>In certain cases, there is a straightforward association: DNA variation in a single gene is sufficient to cause disease. Solving these one-piece puzzles is fairly straightforward: find the specific genetic change and you've identified the cause.
                        Many well-known genetic conditions such as cystic fibrosis, sickle cell anemia or achondroplasia fall into this category. There are thousands of known single-gene disorders. Individually they may be quite rare, but collectively they affect a significant
                        portion of the population. Sequencing and analyzing a human genome can identify these rare genetic changes that cause symptoms or increase risk for future disease. These puzzle pieces are easiest to identify and understand with current knowledge
                        and technology. Genetic variants can either be inherited from a parent or arise in an individual as a brand new change. </p>

                    <p>Sometimes a DNA change does not on its own cause disease but rather increases the likelihood a disease could occur. For example, many genetic variants found in the BRCA1 or BRCA2 genes confer a risk for breast and ovarian cancer that is significantly
                        higher than average, but not 100%. Other genetic changes and environmental puzzle pieces increase or decrease the overall likelihood of cancer development. However, the increase in risk is high enough that physicians generally recommend increased
                        cancer screening and clinical management options for individuals with these types of variants.</p>

                    <p>Most human diseases and traits are a much more complicated puzzle to put together, caused by many genetic and environmental risk factors that contribute to overall risk in very small ways. While we are beginning to identify some of these factors,
                        we still do not understand many. This is the equivalent of putting together a puzzle that is missing many of the pieces. Diabetes, heart disease, and many types of autoimmune disorders are examples of these multifactorial conditions. Research
                        efforts are underway at HudsonAlpha and across the globe to better understand these common, complicated diseases and to identify the genetic and environmental risk factors that contribute to their onset. While known genetic risk factors for these
                        conditions can sometimes be identified, the utility of using that information to determine future disease risk is limited as there are significant gaps in the disease risk calculation.</p>

                      </div>
                    </div>
                  </div> <!--  end row -->
                </div> <!--  end collapse container -->
        </div>
        <hr class="style18">
        <div class="padd-5  section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-primary">CLINICAL REPORT</h1>
                        <h3>What to expect</h3>
                        <p class="lead">The clinical report is what will be returned to the physician who ordered the genome sequence for you.  The report is created by a clinical laboratory similar to other laboraties that produce reports for physicians who have ordered other clinical tests. The information here will be limited, but can be added to your medical record.  Results from this genome guide can not be used in the medical record.
                        </p>
                        <p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#CLINICALREP" aria-expanded="false" aria-controls="collapseExample">
                          Read more
                        </button>
                      </p>
                    </div>
                    <div class="col-md-6">
                        <img src="static/img/clinicalreport.jpg" class="img-fluid img-thumbnail">
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="CLINICALREP">
              <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                  <h1 class="text-primary">CLINICAL REPORT</h1>
                  <a name=""></a>
                  <h3><strong>What to Expect in your Insight Genome Clinical Report</strong></h3>
                <br />

                <p>After your genome has been analyzed, the clinical report will be sent to the physician who ordered the test. That physician will be responsible for following up on any medically significant results and making necessary recommendations for follow-up
                    with other specialists. Your physician will likely contact you when results are ready and may schedule an appointment to discuss the results in more detail. You will also receive a copy of your <i>clinical report </i>from your ordering physician's
                    office. If you desire additional information and consultation regarding your results, you or your healthcare provider may wish to speak with a genetic counselor, who can help to interpret your results in the context of your personal and family
                    history. To find a clinical genetics professional near you, you can either visit the National Society of Genetic Counselors website (nsgc.org) and click on find a genetic counselor or contact the HudsonAlpha Clinical Services Lab, LLC. (<strong>256.327.0438</strong>) or Smith Family Clinic for Genomic Medicine, LLC., <strong>256.327.9640</strong>.</p>

                <p>Your clinical whole genome sequencing report will contain several categories of information. For example, there will be sections for variants associated with disease risk, carrier status, pharmacogenomics, and other identifying traits. Each section
                    will contain a summary of any variants identified, a table with more details about individual variants, and an interpretation and recommendations section based on your specific traits. These groupings make it easy for you and your physician to
                    quickly find the particular type of information that you are most interested in. After the summary sections, there will be several pages of more detailed and technical information on the identified variants, methodology and limitations of the
                    test, and references. Keep in mind that your clinical reportis not contained within this Guide, but was delivered separately by the testing laboratory to your physician.</p>

                      </div>
                    </div>
                  </div> <!--  end row -->
                </div> <!--  end collapse container -->
        </div>
        <hr class="style18">
        <div class="padd-5  section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="static/img/guide.jpg" class="img-fluid img-thumbnail">
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-primary">RESEARCH GUIDE</h1>
                        <h3>What to expect</h3>
                        <p class="lead">The research guide is designed to provide you with additional information derived from publically available research data.  The variants have been shown to be associated with certain characteristics in research studies.  However, they do not meet the current criteria for inclusion in a laboratory issued clinical report and thus should be considered for research purposes only.
                        </p>
                        <p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#RESGUIDE" aria-expanded="false" aria-controls="collapseExample">
                          Read more
                        </button>
                      </p>
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="RESGUIDE">
                <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                  <h1 class="text-primary">RESEARCH RESULTS</h1>
                  <a name=""></a>
                  <h3><strong>The story of you</strong></h3>
                  <br />
                  <p><b><i>Insight Genome Research Guide: What to Expect</i></b></p>

                  <p>In addition to your clinical report, you have elected to participate in the IRB-approved study entitled, Impact of Genomic Sequencing and receive this Insight Genome Research Guide, a research product. A team of research scientists at HudsonAlpha
                    Institute for Biotechnology, an Alabama non-profit corporation, have established a process for identifying additional genetic variants which have known association with certain human conditions and traits. These variants do not meet current criteria
                    for reporting on the laboratory issued clinical report, for the reasons discussed earlier.</p>

                  <p>The Guide is organized into several sections: introductory material, several comprehensive genetic risk chapters for specific conditions, and a catalog of additional medically relevant and non-medically relevant variants. Where applicable, information
                    you provided to the research team, along with your specific genomic variants, are included throughout the text. The chapters, which begin immediately after this introduction, review the current knowledge about the symptoms, heritability, impact
                    of family history, and known genomic and environmental risk factors for each medical condition. Following those chapters is an additional catalog of genomic variants associated with other diseases and medical conditions. Over time these variants
                    and their related conditions may be expanded into additional chapters. The Guide concludes with a set of genomic variants associated with non-medical traitsÑ such as muscle or ear wax type. While unlikely to have profound impact on medical care,
                    these variants provide a unique way to further explore your genome. </p>

                  <p>Throughout this document you will see reference to scientific papers that were used in the research and development of the information found in this Guide. </p>

                      </div>
                    </div>
                  </div> <!--  end row -->
                </div> <!--  end collapse container -->
        </div>
        <hr class="style18">
        <div class="padd-5  section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-primary">UNDERSTANDING YOUR RISK</h1>
                        <h3>Numbers associated with risk</h3>
                        <p class="lead">Most human traits and diseases are caused by the combination of multiple genetic and environmental factors.  This Guide uses the concepts of heritability and odds ratios as a way to explain the contribution of genetic variation to disease risk.  
                        </p>
                        <p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#UNDERSTANDRISK" aria-expanded="false" aria-controls="collapseExample">
                          Read more
                        </button>
                      </p>
                    </div>
                    <div class="col-md-6">
                        <img src="static/img/risk.png" class="img-fluid img-thumbnail">
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="UNDERSTANDRISK">
                <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                  <h1 class="text-primary">UNDERSTANDING YOUR RISK</h1>
                    <a name=""></a>
                    <h3><strong>Implications of Research Data</strong></h3>
                  <br />
                      <p>Most human traits and diseases are caused by the combination of multiple genetic and environmental factors. Determining the extent to which any one single factor contributes to disease risk is complicated, requiring large numbers of people with and
                          without the risk factor in question and establishing a control for all other possible variables at play. This Guide uses the concepts of heritability and odds ratios as a way to explain the contribution of genetic variation to disease risk. <b>Heritability</b>        estimates the extent to which genetic factors contribute to the difference in trait or disease risk across a population. Heritability cannot be applied at the level of the individual. It is a descriptive term for a specific population and can
                          vary widely across groups. Heritability is typically expressed as a percent, between 0-100%. A disease with a low heritability such as 10% would indicate that environmental or other factors play a larger role in the difference in disease risk
                          between people. Meanwhile a high heritability percent indicates that genetic factors play a large role in disease risk. Keep in mind that there are multiple (often many) genetic risk factors that make up the heritability of a particular disease
                          or trait. An individual genetic variant may contribute very small amounts to overall disease risk even for a disease with high heritability.</p>

                      <p>The estimated impact of a single, particular genetic variant on disease risk is often expressed as an odds ratio. An <b>odds ratio</b> is a measure of association between a particular characteristic and an outcomeÑ the odds of developing the trait
                          or condition when the genetic variant is present compared to the odds when the variant is absent. Odds ratios are calculated by comparing a population of individuals with the disease to those without. The frequency of the disease is compared among
                          individuals who have a specific genetic variant to those who lack the variant. </p>

                      <p>An odds ratio of 1.0 indicates that the variant is neutral and does not affect risk. An odds ratio greater than 1.0 indicates that the variant is associated with increased odds of the trait or disease. An odds ratio less than 1.0 indicates that the
                          variant is associated with decreased odds of the trait or disease. The further an odds ratio is from 1.0 the bigger the impact on risk. For complex diseases like those described in this Guide it is common to see odds ratios close to 1.0 (i.e.
                          0.8-1.2) which indicate small changes in overall disease risk.</p>

                      </div>
                    </div>
                  </div> <!--  end row -->
                </div> <!--  end collapse container -->
        </div>
        <hr class="style18">
        <div class="padd-5  section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="static/img/sharing.jpg" class="img-fluid img-thumbnail">
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-primary">SHARING YOUR RESULTS</h1>
                        <h3>Who Should I share my results with?</h3>
                        <p class="lead">As you think about others who might need or want to see your results, it is important to remember that your genomic test results are your private health information to use and share as you decide is appropriate. While there may be benefit to you and others in knowing this information, there could also be risks and implications in having your information shared with a larger audience. The section below explains some of these risks.
                        </p>
                        <p>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#SHARING" aria-expanded="false" aria-controls="collapseExample">
                          Read more
                        </button>
                      </p>
                    </div>
                </div>
            </div>
            <div class="container">
              <div class="row ">
              <div class="collapse" id="SHARING">
                <hr class="style18break">
                <div class="card card-block" style="border-color: #fff;">
                  <h1 class="text-primary">SHARING YOUR RESULTS</h1>
                  <a name=""></a>
                  <h3><strong>Who Should I share my results with?</strong></h3>
                <br />
                <p><b><i></i></b></p>

                <p>Based on information contained in your clinical report or this research Guide, there may be aspects of the information you wish to share with additional individuals. As you think about others who might need or want to see your results, it is important
                    to remember that your genomic test results are your private health information to use and share as you decide is appropriate. While there may be benefit to you and others in knowing this information, there could also be risks and implications
                    in having your information shared with a larger audience. </p>

                <p><b><i>Genetic Discrimination</i></b></p>

                <p>One aspect of genetic testing that raises many questions is the possibility of genetic discrimination. This is the idea that certain individuals or entities could use a person's genetic information in a way that makes it difficult or impossible
                    for the person to obtain employment, insurance, or other activities. In this context, <i>genetic information</i> includes genetic testing results, family health history, the use of genetic services, and participation in genetic research.</p>

                <p>In 2008, a federal law known as the Genetic Information Nondiscrimination Act (GINA) went into effect to help prevent such discrimination. <b>GINA</b> prohibits health insurance companies from asking or requiring patients to undergo genetic testing,
                    as well as from using genetic information to determine whether someone is eligible for coverage or to determine his or her policy premium. This act also prevents many employers from discriminating against an employee or prospective hire based
                    on genetic information.</p>

                <p>GINA does not prevent all types of discrimination, however. For example, life, disability, and long-term care insurance policies are not included among GINA's protections and these types of insurance may use genetic information to determine eligibility
                    for coverage and/or policy premiums. Additionally, GINA applies only to employers who hire more than a certain number of employees. Because of these and other important exceptions, an individual considering any type of genetic testing (clinically
                    or as part of a research study) should discuss the possibility of genetic discrimination with his or her physician or genetic counselor. For more information about genetic discrimination and GINA, visit http://ginahelp.org/.
                    </p>

                <p><b><i>Other Healthcare Providers</i></b></p>

                <p>Many patients who undergo whole genome sequencing may choose to share their results and information with additional healthcare providers. Your results may impact multiple aspects of your medical care, including diagnoses, reproductive decision making,
                    and dosing of medication. It may be helpful for doctors in multiple specialties to have access to and use your test results. It is important to recognize that not all physicians will be familiar or comfortable with dealing with genomic information.
                    Your doctor can contact the HudsonAlpha Clinical Services Lab, LLC (<strong>256.327.0438</strong>) or The Smith Family Clinic for Genomic Medicine, LLC (<strong>.327.9640</strong>) with questions. </p>

                <p><b><i>Family Members</i></b></p>

                <p>It is important to keep in mind that the results from your whole genome sequencing may have implications for other family members. While you may be the only person in your family who has had whole genome sequencing, results from one family member
                    may indicate risk factors or other genetic variants that are present within a genetically-related family. If family members are interested in being tested for a variant found in you, they do not necessarily have to undergo whole genome sequencing.
                    Instead, they may have targeted testing, which only looks for the specific variant(s) found in a relative. Targeted testing is typically less costly and more straightforward than whole genome sequencing. Family members are encouraged to discuss
                    these implications with a clinical genetics professional to determine their specific risks and testing options.</p>

                      </div>
                    </div>
                  </div> <!--  end row -->
                </div> <!--  end collapse container -->
                <hr class="style18bottom">
        </div>
    <!-- END TEXT -->
</div>
</div>
</template>
<script>
export default {
  props: ['bat'],
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  }
}
</script>
