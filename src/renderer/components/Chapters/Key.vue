<style scoped>
.section {
    border-radius: 10px;
    border: 2px solid #D3D3D3;

}
.notfound {
    background-color: #000000;/*BLACK*/
    color: white;
}
.optout {
    background-color: 	#D3D3D3;/*GREY*/
    color: white;
}
.sectiontr {
  height: 50px;
}
tr {
  height: 50px;
}
</style>

<template>

<div class="section">
    <div>
        <table class="table" style="margin=2rem;">
            <tr>
                <th align="center" width="30%">Color</th>
                <th align="left" width="70%">Meaning</th>
            </tr>
            <tr>
                <td align="center" class="norisk">Homozygous Non-Risk Allele</td>
                <td align="left">Neither of your chromosomes have the allele identified in the study at this location.</td>
            </tr>

            <tr>
                <td align="center" class="heterozygous">Heterozygous</td>
                <td align="left">One of your chromosomes has the allele identified in the study at this location.</td>
            </tr>
            <tr>
                <td align="center" class="homozygous">Homozygous Risk Allele</td>
                <td align="left">Both of your chromosomes have the allele identified in the study at this location.</td>
            </tr>
            <tr>
                <td align="center" class="optout">Opted Out</td>
                <td align="left">Your consent form indicated you chose to exclude variants related to this catagory of disease.</td>
            </tr>
            <tr>
                <td align="center" class="notfound">Technical Issue</td>
                <td align="left">The sequence could not be determined at this location.</td>
            </tr>

        </table>
    </div>
</div>

</template>
